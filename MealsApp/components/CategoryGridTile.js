import { View, Pressable, Text } from 'react-native'
import React from 'react'

export function CategoryGridTile({title, color}) {
  return (
    <View>
      <Pressable>
          <View>
              <Text>{title}</Text>
          </View>
      </Pressable>
    </View>
  )
}