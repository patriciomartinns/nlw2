import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import PageHeader from '../../components/PageHeader'
import TeacherIem, { ITeacher } from '../../components/TeacherItem'

import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([])
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        setFavorites(JSON.parse(response))
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView 
        style={styles.teacherList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >

        {favorites.map((teacher: ITeacher) => {
          return (
            <TeacherIem 
              key={teacher.id}
              teacher={teacher} 
              favorited 
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites