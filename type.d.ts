/**
 * TypeScript Type Definitions
 * 
 * Type declarations for third-party libraries that don't have built-in TypeScript support.
 * This file provides type safety for the Locomotive Scroll library.
 * 
 * Locomotive Scroll: A smooth scrolling library with parallax effects
 * This declaration file defines the types/interfaces for the library
 */

declare module "locomotive-scroll" {
  /**
   * Options for scrollTo method
   * Controls how scrolling to a target behaves
   */
  export interface ILenisScrollToOptions {
    behavior?: "auto" | "smooth"; // Scroll behavior
    top?: number;                  // Scroll to top position
    left?: number;                 // Scroll to left position
  }

  /**
   * Configuration options for Locomotive Scroll initialization
   */
  export interface ILocomotiveScrollOptions {
    lenisOptions?: any;
    modularInstance?: any;
    triggerRootMargin?: string;
    rafRootMargin?: string;
    autoResize?: boolean;
    autoStart?: boolean;
    scrollCallback?: () => void;
    initCustomTicker?: () => void;
    destroyCustomTicker?: () => void;
  }

  // Target type for scrollTo method (flexible: can be string selector, number, or element)
  export type lenisTargetScrollTo = any;

  /**
   * LocomotiveScroll Class
   * 
   * Main class for creating smooth scroll instances.
   * Provides methods for controlling scroll behavior, animations, and events.
   */
  export default class LocomotiveScroll {
    rafPlaying: boolean;
    private lenisInstance;
    private coreInstance;
    private lenisOptions;
    private modularInstance?;
    private triggerRootMargin?;
    private rafRootMargin?;
    private rafInstance?;
    private autoResize?;
    private autoStart?;
    private ROInstance?;
    private scrollCallback;
    private initCustomTicker?;
    private destroyCustomTicker?;
    private _onRenderBind;
    private _onResizeBind;
    private _onScrollToBind;
    constructor({
      lenisOptions,
      modularInstance,
      triggerRootMargin,
      rafRootMargin,
      autoResize,
      autoStart,
      scrollCallback,
      initCustomTicker,
      destroyCustomTicker,
    }?: ILocomotiveScrollOptions);

    private _init;
    destroy(): void;
    private _bindEvents;
    private _unbindEvents;
    private _bindScrollToEvents;
    private _unbindScrollToEvents;
    private _onResize;
    private _onRender;
    private _onScrollTo;
    start(): void;
    stop(): void;
    removeScrollElements($oldContainer: HTMLElement): void;
    addScrollElements($newContainer: HTMLElement): void;
    resize(): void;
    scrollTo(target: lenisTargetScrollTo, options?: ILenisScrollToOptions): void;
    private _raf;
  }
}
