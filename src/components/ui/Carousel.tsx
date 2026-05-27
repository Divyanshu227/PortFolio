import type { ReactElement } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  cardHeight?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Computer Science Engineer',
    description:
      'Passionate about building scalable software, solving real-world problems, and exploring modern technologies.',
    id: 1,
    icon: <FiFileText className="h-4 w-4 text-white" />
  },
  {
    title: 'MERN Stack Developer',
    description:
      'Crafting responsive, modern, and high-performance web applications using MongoDB, Express, React, and Node.js.',
    id: 2,
    icon: <FiCircle className="h-4 w-4 text-white" />
  },
  {
    title: 'Machine Learning Enthusiast',
    description:
      'Exploring AI, deep learning, and intelligent systems while continuously learning modern ML technologies.',
    id: 3,
    icon: <FiLayers className="h-4 w-4 text-white" />
  },
  {
    title: 'Competitive Programmer',
    description:
      'Strong problem-solving mindset with experience in algorithms, data structures, and coding contests.',
    id: 4,
    icon: <FiLayout className="h-4 w-4 text-white" />
  },
  {
    title: 'Creative Designer',
    description:
      'Designing futuristic UI experiences, modern branding, and visually engaging digital interfaces.',
    id: 5,
    icon: <FiCode className="h-4 w-4 text-white" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  cardHeight: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselCard({ item, index, itemWidth, cardHeight, round, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

  return (
    <motion.div
      className={`relative shrink-0 flex flex-col overflow-hidden cursor-grab active:cursor-grabbing ${
        round
          ? 'items-center justify-center text-center bg-[#e7e2ef] border-0'
          : 'items-stretch justify-between rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.06)] shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-2xl'
      }`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : cardHeight,
        rotateY,
        ...(round ? { borderRadius: '50%' } : {})
      }}
      transition={transition}
    >
      <div className={round ? 'p-0' : 'p-5 pb-0'}>
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-black/20">
          {item.icon}
        </span>
      </div>

      <div className="flex h-full flex-col justify-end gap-2 p-5 pt-4">
        <div className="text-lg font-extrabold tracking-tight text-white">{item.title}</div>
        <p className="text-sm leading-6 text-white/75">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  cardHeight = 260,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): ReactElement {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const container = containerRef.current;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => setIsAnimating(true);

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }

    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round ? 'rounded-full border border-white' : 'rounded-[24px] border border-white/10'}`}
      style={{
        width: `${baseWidth}px`,
        minHeight: `${cardHeight + 32}px`,
        ...(round ? { height: `${baseWidth}px` } : {})
      }}
    >
      <motion.div
        className="flex items-stretch"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselCard
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            cardHeight={cardHeight}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>

      <div className={`flex w-full justify-center ${round ? 'absolute bottom-12 left-1/2 z-20 -translate-x-1/2' : ''}`}>
        <div className="mt-4 flex w-40 justify-between px-8">
          {items.map((_, index) => (
            <motion.button
              key={index}
              type="button"
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                activeIndex === index ? (round ? 'bg-white' : 'bg-[#333333]') : round ? 'bg-[#555]' : 'bg-[rgba(51,51,51,0.4)]'
              }`}
              animate={{ scale: activeIndex === index ? 1.2 : 1 }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
