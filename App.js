import { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';


export default function App() {
  //按鈕功能
  const [count, setCount] = useState(0);
  const [changePicture, setChangePicture] = useState(true);

  const imageChange = () => {
    //console.log('這是圖片');
    setChangePicture(!changePicture);
  }

  const clickPlusBtn = () => {
    //console.log('點擊到增加按鈕');
    setCount(count +1);
  }

  const clickMinusBtn = () => {
    //console.log('點擊到減少按鈕');
    setCount(count -1);
  }

  const resetNum = () => {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:26}}>計數器</Text>
      <Text style={{fontSize:24}}>點擊 {count} 下</Text>
      <View style={styles.topBtns}>
        <TouchableOpacity  style={styles.btnsControl} onPress={clickPlusBtn}>
          <Text style={{fontSize:24}}>+</Text>
        </TouchableOpacity>
        <Text style={styles.btnsContent}>{count}</Text>
        <TouchableOpacity style={styles.btnsControl}  onPress={clickMinusBtn}>
          <Text style={{fontSize:24}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetNum}>
          <Text style={{fontSize:24, marginLeft:10,backgroundColor:'yellow', padding:10, borderRadius:10}}>歸零</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={{fontSize:26, marginBottom:10}}>切換圖片</Text>
      <View>
       {changePicture ?
          <TouchableOpacity onPress={imageChange}>
            <Image
              style={{ width:250, height:200, borderRadius:10 }}
              source={{uri:'https://img.soundofhope.org/2019/02/1-7948.jpg'}}
            />
            <Text style={styles.picStyle}>海 獺</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={imageChange}>
            <Image
              style={{ width:250, height:200, borderRadius:10 }}
              source={{uri:'https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg'}}
            />
            <Text style={styles.picStyle}>水豚君</Text>
          </TouchableOpacity>
        }
      </View>
      <TouchableOpacity style={{backgroundColor:'pink', padding:10, borderRadius:10, marginTop:30}} onPress={imageChange}> 
        <Text style={{fontSize:24, textAlign:'center', color:'yellow'}}>圖片更換</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBtns: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
    marginBottom:20,
  },
  btnsContent:{
    textAlign:'center',
    marginEnd:10,
    marginStart:10,
    fontSize:24,

  },
  btnsControl:{
    paddingTop:5,
    paddingBottom:5,
    padding:15,
    backgroundColor:'pink',
    borderRadius: 10,
  },
  picStyle:{
    fontSize:20,
    textAlign:'center',
    color:'#FF7F50',
  }
});
