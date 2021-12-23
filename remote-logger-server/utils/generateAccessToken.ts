import {v4} from 'uuid';

const generateAccessToken = (): string => v4();

export default generateAccessToken;