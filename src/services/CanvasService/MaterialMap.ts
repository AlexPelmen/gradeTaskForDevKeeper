export type MaterialMap = {
    [material: string]: {
        color?: string,
        texture?: string
    }
}

export const materialMap: MaterialMap = {
    'marble': {
        color: undefined,
        texture: 'img/marble.jpg',
    },
    'redstone': {
        color: undefined,
        texture: 'img/redstone.jpg',
    },
    'bluestone': {
        color: '#161840',
        texture: undefined,
    },
    'asphalt': {
        color: '#3A3A3A',
        texture: undefined,
    },
    'yellowstone': {
        color: '#413B1E',
        texture: undefined,
    },
    'wetasphalt': {
        color: undefined,
        texture: 'img/wetasphalt.jpg',
    },
    'earth': {
        color: '#372D21',
        texture: undefined,
    },
    'obsidian': {
        color: '#170E19',
        texture: undefined,
    },
}
