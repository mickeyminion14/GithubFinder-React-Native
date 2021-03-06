import React, {useEffect, useState} from 'react';
import {FlatList, Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Content,
} from 'native-base';
import {PRIMARY, WHITE} from '../../../styles/colors';
import UserCard from './UserCard/UserCard';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import {homeService} from './Home.service';
import {searchService} from '../../../services/Search.service';
import {Subscription} from 'rxjs';
import {SEARCH_PARAMS} from '../../../constants/app-constants';
import NoData from '../../shared/NoData/NoData';

export default function Home() {
  const [users, setUsers] = useState<any>(null);
  const [previousSearch, setPreviousSearch] = useState<string>('');
  const sub: Subscription = new Subscription();
  const searchParams = {...SEARCH_PARAMS};

  useEffect(() => {
    getUsers();
    listenToSearch();
    return () => {
      sub.unsubscribe();
    };
  }, []);

  const getUsers = async () => {
    try {
      const {data} = await homeService.getUsers();
      console.log(data);

      setUsers(data);
    } catch (error) {
      setUsers([]);
    }
  };

  const searchUsers = async () => {
    try {
      console.log(searchParams);

      const {data} = await homeService.searchUsers(searchParams);
      console.log(data);

      setUsers(data.items);
    } catch (error) {
      setUsers([]);
    }
  };

  const listenToSearch = () => {
    sub.add(
      searchService.getSearchText().subscribe((data: any) => {
        const {searchText} = data;
        if (searchText == '') {
          getUsers();
          return;
        }
        if (previousSearch == searchText) {
          return;
        }

        setPreviousSearch(searchText);
        searchParams.q = searchText;
        searchUsers();
      }),
    );
  };
  return (
    <Container>
      <Header
        searchBar
        style={{backgroundColor: PRIMARY}}
        androidStatusBarColor={PRIMARY}
        iosBarStyle="light-content">
        <Item style={styles.searchWrapper}>
          <Icon name="ios-search" style={{fontSize: 25}} />
          <Input
            onChangeText={(text) => searchService.sendSearchText(text)}
            style={styles.searchInput}
            placeholder="Search"
          />
        </Item>
      </Header>

      <Content>
        <ScrollView>
          <View style={styles.contenWrapper}>
            {users && users.length > 0 ? (
              <>
                {users.map((user: any) => (
                  <Animatable.View
                    key={user.id}
                    animation="pulse"
                    duration={1000}
                    style={styles.card}>
                    <UserCard user={user}></UserCard>
                  </Animatable.View>
                ))}
              </>
            ) : null}

            {users && users.length == 0 ? (
              <View style={{height: '100%', flex: 1, width: '100%'}}>
                <NoData></NoData>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    borderRadius: 5,
    height: 45,
    backgroundColor: WHITE,
  },
  searchInput: {},

  contenWrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  card: {
    width: '45%',
    margin: 8,
  },
});
