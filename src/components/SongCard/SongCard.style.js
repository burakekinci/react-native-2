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
        color: '#4d4d4d',
    },
    title:{
        fontWeight: "bold",
        fontSize: 25,
        color: '#2d2d2d',
    },
    image:{
        height:80,
        width:80,
        borderRadius:40,
    },
    year:{
        marginLeft: 10,
        fontWeight: "bold",
        color: 'red',
        fontStyle: 'italic',
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