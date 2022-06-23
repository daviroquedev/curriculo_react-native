import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    card_container:{
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        marginTop:20,
      },
      card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#939393',
        padding: 10,
        backgroundColor:'#FFF',
      },
      card_header_text:{
        color:'black',
        fontWeight:'bold',
        fontSize:16,
      },
      card_content:{
        marginTop:20,
      },
      card_content_text:{
        color:'#4F4F4F',
        marginBottom: 10,
      }
})

export default style;