import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class List extends Component {
  render() {
    return (
          <View key={this.props.keyval} style={styles.list}>
            <Text style={styles.listText}>{this.props.val.date}</Text>
            <Text style={styles.listText}>{this.props.val.list}</Text>
            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.listDelete}>
              <Text style={styles.listDeleteText}>X</Text>
            </TouchableOpacity>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  listText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  listDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  listDeleteText: {
    color: 'white',
  },
});