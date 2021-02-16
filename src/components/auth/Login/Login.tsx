import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {PRIMARY, SECONDARY, WHITE} from '../../../styles/colors';
import {Button, Icon, Input, Item, Toast} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useState} from 'react';
import SocialButton from '../../shared/SocialButton/SocialButton';
import {windowHeight} from '../../../utils/Dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {loaderService} from '../../../services/loader.service';
import {Formik} from 'formik';
import {LoginValidator} from './Login.validator';
import Tooltip from 'react-native-walkthrough-tooltip';
import {firebaseAuth} from '../../../Firebase/Firebase';
import {utilityService} from '../../../services/utility.service';
import {login} from '../../../Store/slices/userSlice';
import {useDispatch} from 'react-redux';
export default function Login({navigation}: any) {
  const [passowordHidden, setPassowordHidden] = useState(true);
  const dispatch = useDispatch();

  const loginWithEmail = async (values: any) => {
    console.log(values);
    loaderService.showLoader(true);
    try {
      let {user}: any = await firebaseAuth.signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      loaderService.showLoader(false);
      if (user) {
        console.log(user);
        dispatch(
          login({
            uid: user.uid,
            photo: user.photoURL,
            email: user.email,
            displayName: user.displayName,
          }),
        );
        utilityService.showToast('Success', 'success');
      }
    } catch (e) {
      loaderService.showLoader(false);

      console.log(e);
      utilityService.showToast('Error', 'danger');
    }
  };
  const loginWithGoogle = async () => {
    loaderService.$loader.next(false);
  };
  return (
    <View style={styles.loginContainer}>
      <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={800}
        style={styles.footer}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => loginWithEmail(values)}
          validationSchema={LoginValidator}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <Item style={styles.inputWrapper} regular>
                <Icon style={{color: PRIMARY}} name="person-outline" />
                <Input
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  autoCompleteType="email"
                  autoCapitalize="none"
                  placeholder="Email"
                  keyboardType="email-address"
                />
              </Item>
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <Item style={styles.inputWrapper} regular>
                <Icon style={{color: PRIMARY}} name="lock-closed-outline" />
                <Input
                  value={values.password}
                  secureTextEntry={passowordHidden ? true : false}
                  placeholder="Password"
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                />
                <Button
                  onPress={() => setPassowordHidden(!passowordHidden)}
                  transparent>
                  {passowordHidden ? (
                    <Icon
                      style={{color: PRIMARY, fontSize: 25, paddingTop: 10}}
                      name="eye-off-outline"
                    />
                  ) : (
                    <Icon
                      style={{color: PRIMARY, fontSize: 25, paddingTop: 10}}
                      name="eye-outline"
                    />
                  )}
                </Button>
              </Item>
              {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.button}>
                  <LinearGradient
                    colors={[PRIMARY, SECONDARY]}
                    style={styles.signIn}>
                    <Text style={styles.textSign}>Login </Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        {/* <View> */}
        <View style={styles.orWrapper}>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <SocialButton
          buttonText="Continue with Facebook"
          backgroundColor="#e6eaf4"
          type="logo-facebook"
          color="#4867aa"
        />
        <SocialButton
          onPress={loginWithGoogle}
          buttonText="Continue with Google"
          backgroundColor="#f5e7ea"
          type="logo-google"
          color="#de4d41"
        />
        {/* </View> */}
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: PRIMARY,
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    backgroundColor: WHITE,
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  textHeader: {
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 30,
  },
  textFooter: {
    color: 'red',
    fontSize: 19,
  },
  inputWrapper: {
    marginTop: 30,
    height: windowHeight / 15,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,

    marginTop: Platform.OS == 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: windowHeight / 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: WHITE,
  },
  orWrapper: {
    width: '100%',

    marginVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  error: {
    fontSize: 12,
    color: 'red',
    paddingTop: 10,
    paddingLeft: 5,
  },
  orText: {width: 50, textAlign: 'center', color: 'gray'},
});
