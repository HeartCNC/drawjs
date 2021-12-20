/**
 * 预设缓动函数
 */
import { PI } from './var'

export function easeIn(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}

export function easeOut(x: number): number {
  return 1 - Math.sqrt(1 - x * x)
}

export function easeInSine(x: number) {
  return 1 - Math.cos((x * PI) / 2)
}

export function easeInQuad(x: number): number {
  return x * x;
}

export function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4)
}

export function reverseEase(y: number) {
  return 1 - Math.sqrt(1 - y * y)
}
