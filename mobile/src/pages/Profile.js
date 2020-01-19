import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {

    //Passado como parametro da tela Main navigation.navigate esse navigation tem em todas as telas
    const github_username = navigation.getParam('github_username'); 

    return <WebView style={{flex: 1}} source={{ uri: `https://github.com/${github_username}` }}/>
}

export default Profile;