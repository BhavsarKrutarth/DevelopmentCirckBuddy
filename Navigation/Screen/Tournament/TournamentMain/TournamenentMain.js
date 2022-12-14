import { Text, View } from 'react-native'
import React, { PureComponent } from 'react'
import { useRoute } from '@react-navigation/native';


const TournamenentMain = props => {
    const route = useRoute();
    let Tournamentid = route.params.Tournamentid
    return (
      <View>
        <Text>TournamenentMain id = {Tournamentid}</Text>
      </View>
    )
}

export default TournamenentMain