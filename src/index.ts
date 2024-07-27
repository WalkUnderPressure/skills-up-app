import { doWork } from './doWork'

const message = doWork('TS and WebPack!')

document.body.innerHTML = `<h1>Hello, ${message}</h1>`
