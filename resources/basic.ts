// Basic Types
// Enum
enum Direction {
  UP = 1,
  DOWN,
  LEFT,
  RIGHT,
}

enum Emotion {
  HAPPY = 'happy',
  SAD = 'sad',
  ANGRY = 'angry',
  CONFUSED = 'confused'
}

enum Color {
  Red = '#ff0000',
  Green = '#00ff00',
  Blue = '#0000ff'
}

// Type
type Point = {
  color: Color;
  x: number;
  y: number;
}

type Square = {
  color: Color;
  size: number;
}

type Rectangle = {
  color: Color;
  width: number;
  height: number;
}

// Interface type
interface ShapeInterface {
  color: string;
  draw(): void;
}

// Class type
class Circle implements ShapeInterface {
  color: string;
  radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
  }

  draw(): void {
    console.log('Drawing circle');
  }
}

// Union type
type Shape = Square | Circle;

// Intersection type
type Shape3D = Square & Rectangle;
const shape3D: Shape3D = {
  color: Color.Red,
  size: 10,
  width: 20,
  height: 30
}

// Type assertion
const mySquare = {} as Square;

// Type guard
function isCircle(shape: Shape): shape is Circle {
  return (shape as Circle).radius !== undefined;
}

// Literal type
// String literal type
export type AcceptedColor = "red" | "green" | "blue";
const myAcceptedColor: AcceptedColor = "red";
// Numeric literal type
export type AcceptedNumber = 1 | 2 | 3;
const myAcceptedNumber: AcceptedNumber = 1;
// Boolean literal type
export type AcceptedBoolean = true | false;
const myAcceptedBoolean: AcceptedBoolean = true;
// Enum literal type
export type AcceptedDirection = Direction.UP | Direction.DOWN | Direction.LEFT | Direction.RIGHT;
const myAcceptedDirection: AcceptedDirection = Direction.UP;
// Mixed literal type
export type AcceptedValue = "red" | 1 | true;
// Object literal type
type ShapeType = Square | Circle;

// Promise type
type StringPromise = Promise<string>;
type NumberPromise = Promise<number>;
type BooleanPromise = Promise<boolean>;
type ShapePromise = Promise<Shape>;
type ComplexPromise = Promise<Shape | string>;
function getShape(): Promise<Shape> {
  return Promise.resolve(new Circle('red', 10));
}
