import {atomWithStorage} from 'jotai/utils';
import {ACCESS_TOKEN, TOP_HEADLINES} from './constants';

export const accessTokenAtom = atomWithStorage(ACCESS_TOKEN, '');
export const topHeadlines = atomWithStorage(TOP_HEADLINES, {});
