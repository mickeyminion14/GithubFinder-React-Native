import {Toast} from 'native-base';

class UtilityService {
  constructor() {}

  showToast(
    message: string,
    type: 'success' | 'warning' | 'danger' = 'warning',
    onClose?: () => {},
  ): void {
    Toast.show({
      text: message,
      duration: 4000,
      type,
      position: 'bottom',
      onClose: onClose ? onClose : undefined,
      buttonText: 'close',
      swipeDisabled: false,
    });
  }
}

export const utilityService = new UtilityService();
