import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import JobCategory from '../../components/jobCategory';
import JobPost from '../../components/jobPost';
import Footer from '../../components/footer';



var {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});

const jobCategories = [
  {index:0,key: 'MANAGMENT JOBS'},
  {index:1,key: 'DEVELOPMENT JOBS'},
  {index:2,key: 'ALL JOBS'},

]

var managerialJobs = [
  {jobId:0,jobTitle: "sales manager" },
  {jobId:1,jobTitle: "product manager"},
  {jobId:2,jobTitle: "art director"}
]

var developmentJobs = [
  {jobId:0,jobTitle: "full stack developer" },
  {jobId:1,jobTitle: "front end developer"},
  {jobId:2,jobTitle: "backend developer"}
]

var allJobs = [
  {jobId:0,jobTitle: "sales manager" },
  {jobId:1,jobTitle: "product manager"},
  {jobId:2,jobTitle: "art director"},
  {jobId:3,jobTitle: "full stack developer" },
  {jobId:4,jobTitle: "front end developer"},
  {jobId:5,jobTitle: "backend developer"}
]

var jobId = 3

var selectedCategoryIndex = 0




class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      jobList: managerialJobs
    }
    this._loadMoreJobs = this._loadMoreJobs.bind(this)
    this._handleCategoryChange = this._handleCategoryChange.bind(this)
  }

  _loadMoreJobs() {
    var newItems = []
    newItems.push({"jobId":jobId,jobTitle: "sales manager" })
    jobId++
    newItems.push({"jobId":jobId,jobTitle: "sales manager" })
    id:jobId++

    this.setState({
      jobList:  [...this.state.jobList, ...newItems],
    })
  }

  _keyExtractor (item, index){
    return item.jobId;
  }

  _handleCategoryChange(index) {
    selectedCategoryIndex = index
    if(index == 0 ) {
      this.setState({
        jobList: managerialJobs
      })
    }
    else if (index == 1) {
      this.setState({
        jobList: developmentJobs
      })
    }
    else {
      this.setState({
        jobList: allJobs
      })
    }
  }



  render (){
    return (
      <View style={styles.main}>
      <ScrollView style={{flex:1}}>
        <View style={{height:height* 0.1,marginTop:20}}>

            <FlatList
              horizontal={true}
              data={jobCategories}
              extraData={this.state}
              renderItem={({item}) => (
                <View style={{height:height* 1}}>
                <JobCategory itemValue={item.key} handleCategoryChange={this._handleCategoryChange} itemIndex={item.index} ></JobCategory>
                {item.index == selectedCategoryIndex && <View style={{height:2,backgroundColor:'black',width:'70%',marginLeft:"15%",marginTop:10}}></View>}
                </View>
              )}
              />
          </View>


          <View style={{backgroundColor:'rgb(249,249,249)'}}>
            <FlatList
                horizontal={false}
                numColumns={1}
                keyExtractor={this._keyExtractor}
                data={this.state.jobList}
                style={{marginTop:50}}
                renderItem={({item}) =>
                  <JobPost jobPostData={item}></JobPost>

                }
              />
              <TouchableOpacity
                style={{flex: 1, alignItems: "center",  borderWidth: 2,
                  borderRadius: 5,height:70,
                  borderColor: '#000000', justifyContent: "center", marginLeft:"7%", marginRight:"7%",marginBottom:30}}
                onPress={this._loadMoreJobs}
                >
                <View>
                  <Text>LOAD MORE</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Footer></Footer>
          </ScrollView>
      </View>
    )
  }
}


export default Main;
