import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native'

import Title from '../component/Title'
import List from '../component/List'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listArray: [],
      listText: '',
    }
  }

  render() {

    let lists = this.state.listArray.map((val, key) => {
      return <List key={key} keyval={key} val={val}
              deleteMethod={ () => this.deleteList(key) } />
    })

    return (
      <View style={styles.container}>
        <Title>
          To-Do-List
        </Title>
        <ScrollView style={styles.scrollContainer}>
          {lists}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput 
            style={styles.textInput}
            placeholder='>Enter an item'
            onChangeText={(listText)=> this.setState({listText})}
            value={this.state.listText}
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
          </TextInput>
        </View>
        <TouchableOpacity onPress={ this.addList.bind(this) } style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addList(){
    if(this.state.listText){
        var d = new Date();
        this.state.listArray.push({
            'date':d.getFullYear()+
            "/"+(d.getMonth()+1) +
            "/"+ d.getDate(),
            'list': this.state.listText
        });
        this.setState({ listArray: this.state.listArray });
        this.setState({ listText: ''});
    }
  }
  deleteList(key) {
    this.state.listArray.splice(key, 1);
    this.setState({ listArray: this.state.listArray });
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});
