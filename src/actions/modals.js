import { types } from '../types/types';

export const showLoadingModal = () => ({
    type: types.modalsShow
});

export const HideLoadingModal = () => ({
    type: types.modalsHide
});