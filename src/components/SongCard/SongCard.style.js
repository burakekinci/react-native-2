import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding: 10,
        flexDirection: "row",
    },
    inner_container:{
        padding: 10,
        flex:1,
        justifyContent :'center',
    },
    info_container:{
        flexDirection:"row",
        flex:1,
        alignItems:'center',
    },
    content_container:{
        flexDirection:"row",
    },
    artist:{
        color: 'gray',
    },
    title:{
        fontWeight: "bold",
        fontSize: 25,
        color: 'black',
    },
    image:{
        height:100,
        width:100,
        borderRadius:50,
    },
    year:{
        marginLeft: 10,
        fontWeight: "bold",
        color: 'red',
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius: 5,
    },
    soldout_title:{
        color:'red',
        fontSize: 12,
    },
})