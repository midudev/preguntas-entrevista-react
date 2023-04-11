import type { ReactNode } from 'react'

export interface Settings {
  /**
   * Rotation of the book, in degrees.
   */
  rotate: number
  /**
   * Rotation of the book on hover, in degrees.
   */
  rotateHover: number
  /**
   * Perspective value. 600 seems to be a realistic value.
   */
  perspective: number
  /**
   * Duration of rotate animation, in milliseconds.
   */
  transitionDuration: number
  /**
   * Radius of right corners, in pixels.
   */
  radius: number
  /**
   * Book thickness, in pixels.
   */
  thickness: number
  /**
   * Color of the inside of back cover.
   */
  bgColor: string
  /**
   * Color of box shadow.
   */
  shadowColor: string
  /**
   * Width of the book, in pixels.
   */
  width: number
  /**
   * Height of the book, in pixels.
   */
  height: number
  /**
   * Offset between the pages and the cover size, in pixels.
   */
  pagesOffset: number
}

export interface Props extends Partial<Settings> {
  children: ReactNode
}

/**
 * `BookCover` is the component you can use to display an animated 3D version of your book cover.
 */
export const BookCover = ({
  children,
  rotate = 30,
  rotateHover = 5,
  perspective = 600,
  transitionDuration = 1,
  radius = 2,
  thickness = 35,
  bgColor = '#01060f',
  shadowColor = 'rgba(0, 0, 0, .2)',
  width = 100,
  height = 150,
  pagesOffset = 4
}: Props) => {
  const uniqueId = 'book'

  const css = getCssForSettings(uniqueId, {
    rotate,
    rotateHover,
    perspective,
    transitionDuration,
    radius,
    thickness,
    bgColor,
    shadowColor,
    width,
    height,
    pagesOffset
  })

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className={`book-container-${uniqueId}`}>
        <div className='book'>{children}</div>
      </div>
    </>
  )
}

export const getCssForSettings = (uniqueId: string, settings: Settings) => {
  return `
    .book-container-${uniqueId} {
      display: flex;
      align-items: center;
      justify-content: center;
      perspective: ${settings.perspective}px;
    }
    
    @keyframes initAnimation-${uniqueId} {
      0% {
        transform: rotateY(${-settings.rotateHover}deg);
      }
      100% {
        transform: rotateY(${-settings.rotate}deg);
      }
    }
    
    .book-container-${uniqueId} .book {
      width: ${settings.width}px;
      height: ${settings.height}px;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateY(${-settings.rotate}deg);
      transition: transform ${settings.transitionDuration}s ease;
      animation: 1s ease 0s 1 initAnimation-${uniqueId};
    }
    
    .book-container-${uniqueId} .book:hover {
      transform: rotateY(${-settings.rotateHover}deg) scale(1.25)
    }
    
    .book-container-${uniqueId} .book > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      width: ${settings.width}px;
      height: ${settings.height}px;
      transform: translateZ(${settings.thickness / 2}px);
      background-color: ${settings.bgColor};
      border-radius: 0 ${settings.radius}px ${settings.radius}px 0;
      box-shadow: 5px 5px 20px ${settings.shadowColor};
      background-color: ${settings.bgColor};
    }
    
    .book-container-${uniqueId} .book::before {
      position: absolute;
      content: ' ';
      left: 0;
      top: ${settings.pagesOffset}px;
      width: ${settings.thickness - 2}px;
      height: ${settings.height - 2 * settings.pagesOffset}px;
      transform: translateX(${settings.width -
        settings.thickness / 2 -
        settings.pagesOffset}px) rotateY(90deg);
      background: linear-gradient(90deg, 
        #fff 0%,
        #f9f9f9 5%,
        #fff 10%,
        #f9f9f9 15%,
        #fff 20%,
        #f9f9f9 25%,
        #fff 30%,
        #f9f9f9 35%,
        #fff 40%,
        #f9f9f9 45%,
        #fff 50%,
        #f9f9f9 55%,
        #fff 60%,
        #f9f9f9 65%,
        #fff 70%,
        #f9f9f9 75%,
        #fff 80%,
        #f9f9f9 85%,
        #fff 90%,
        #f9f9f9 95%,
        #fff 100%
        );
    }
    
    .book-container-${uniqueId} .book::after {
      position: absolute;
      top: 0;
      left: 0;
      content: ' ';
      width: ${settings.width}px;
      height: ${settings.height}px;
      transform: translateZ(${-settings.thickness / 2}px);
      background-color: ${settings.bgColor};
      border-radius: 0 ${settings.radius}px ${settings.radius}px 0;
      box-shadow: -10px 0 50px 10px ${settings.shadowColor};
    }
  `
}
