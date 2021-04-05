import React, { Component } from 'react';
import { StyleSheet, Text, View ,
  Button,
} from 'react-native';
import { connect } from "react-redux";
import {changeCount} from '../actions/counts'

class Test extends Component {
  
    decrementCount() {
      let { cnt } = this.props;
      cnt--;
      this.props.changeCount(cnt)
    }
    incrementCount() {
      let { cnt } = this.props;
      cnt++;
      this.props.changeCount(cnt)
    }
    render() {
      return (
        <View styles={styles.MainContainer}>
          <Button 
            title="increment"
            onPress={() => this.incrementCount()}
          />
          <Text styles={styles.textStyle}>{this.props.cnt}</Text>
          <Button styles={styles.bottomView}
            title="decrement"
            onPress={() => this.decrementCount()}
          />
        </View>
      );
    }
}


const mapStateToProps = state => {
    return {
        cnt: state.count.count,
       
    };
};

const mapDispatchToProps = {
    changeCount
};

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
 
    bottomView:{
 
      width: '100%', 
      height: 50, 
      backgroundColor: '#FF9800', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
 
    textStyle:{
 
      color: '#fff',
      fontSize:22
    }
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);

  