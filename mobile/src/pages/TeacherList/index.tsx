import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader'
import TeacherIem, { ITeacher } from '../../components/TeacherItem'

import api from '../../services/api'

import styles from './styles'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFiltersVisible, setIsFilterVisible] = useState(false)

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: ITeacher)  => {
          return teacher.id
        })
        setFavorites(favoritedTeachersIds)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit() {
    loadFavorites()
    const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        }
      })

    setIsFilterVisible(false)
    setTeachers(response.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton style={{ padding: 5 }} onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={25} color="#04d361" />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Qual a matéria?" 
              placeholderTextColor="#c1bccc" 
              value={subject}
              onChangeText={text => setSubject(text)}
            />
          

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc" 
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc" 
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView 
        style={styles.teacherList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >

        {teachers.map((teacher: ITeacher) => {
          return (
            <TeacherIem 
              key={teacher.id} 
              teacher={teacher} 
              favorited={favorites.includes(teacher.id)}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default TeacherList