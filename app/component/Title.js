import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  title: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
});