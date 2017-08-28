/** 一块的大小对应16个像素 */
export const BLOCK_SIZE = 16
/** 坦克的大小 */
export const TANK_SIZE = BLOCK_SIZE
/** 战场的大小 (13block * 13block) */
export const FIELD_BLOCK_SIZE = 13
/** 战场的大小 (208pixel * 208pixel) */
export const FIELD_SIZE = BLOCK_SIZE * FIELD_BLOCK_SIZE
/** 子弹的大小 */
export const BULLET_SIZE = 3
/** 坦克生成的延迟 */
export const TANK_SPAWN_DELAY = 1500
/** 摧毁steel的最低子弹power值 */
export const STEEL_POWER = 3
/** 坦克移动速度单位. 玩家坦克2x, basic-tank 1x, fast-tank 3x, 其他坦克2x  */
export const TANK_MOVE_SPEED_UNIT = 0.02
/** 子弹飞行速度单位. 玩家坦克2x(如果没升级的话), basic-tank 1x, power-tank 3x, 其他坦克2x */
export const BULLET_MOVE_SPEED_UNIT = 0.08

/**
 * 坦克的配色方案
 * 共有4种配色方案: 黄色方案, 绿色方案, 银色方案, 红色方案
 * 每种配色方案包括三个具体的颜色值, a对应浅色, b对应一般颜色, c对应深色
 */
type Schema = { [color: string]: { a: string, b: string, c: string } }
export const TANK_COLOR_SCHEMES: Schema = {
  yellow: {
    a: '#E7E794',
    b: '#E79C21',
    c: '#6B6B00',
  },
  green: {
    a: '#B5F7CE',
    b: '#008C31',
    c: '#005200',
  },
  silver: {
    a: '#FFFFFF',
    b: '#ADADAD',
    c: '#00424A',
  },
  red: {
    a: '#FFFFFF',
    b: '#B53121',
    c: '#5A007B',
  },
}

/** 物体的大小(边长) */
export const ITEM_SIZE_MAP = {
  BRICK: 4,
  STEEL: 8,
  RIVER: BLOCK_SIZE,
  SNOW: BLOCK_SIZE,
  FOREST: BLOCK_SIZE,
}

/** 物体铺满地图一整行所需要的数量 */
export const N_MAP = {
  BRICK: FIELD_SIZE / ITEM_SIZE_MAP.BRICK,
  STEEL: FIELD_SIZE / ITEM_SIZE_MAP.STEEL,
  RIVER: FIELD_SIZE / ITEM_SIZE_MAP.RIVER,
  SNOW: FIELD_SIZE / ITEM_SIZE_MAP.SNOW,
  FOREST: FIELD_SIZE / ITEM_SIZE_MAP.FOREST,
}

export const CONTROL_CONFIG = {
  player1: {
    up: 'w',
    left: 'a',
    down: 's',
    right: 'd',
    fire: 'j',
  },
  player2: {
    up: 'up',
    left: 'left',
    down: 'down',
    right: 'right',
    fire: 'space',
  },
}