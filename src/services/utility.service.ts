import {Toast} from 'native-base';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../Store/slices/userSlice';
import {IConfirmDialog} from '../types/types';

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
      buttonText: 'Close',
      swipeDisabled: false,
    });
  }

  showConfirmationDialog(options: IConfirmDialog): void {
    Alert.alert(
      options.title,
      options.message || '',
      [
        {
          text: options.negativeButtonText || 'No',
          onPress: () => options.negativeAction || null,
          style: 'destructive',
        },
        {
          text: options.positiveButtonText || 'Yes',
          onPress: () => options.positiveAction(),
        },
      ],

      {cancelable: false},
    );
  }
}

export const utilityService = new UtilityService();
