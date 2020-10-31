import React from 'react';
import { StyleSheet, View } from 'react-native';
import BoardItem from './BoardItem';

const BoardList = ({ loading, error, boardList }) => {
    const DATA = boardList;

    return(
        <View
            style={ styles.container }
        >
            {
                DATA ?
                DATA.map(
                    (item, i) => {
                        return( 
                            <BoardItem 
                                key={ i }
                                id={ item._id }
                                title={ item.boardTitle } 
                                writer={ item.writer }
                                date={ item.date }
                            />
                        )
                    }
                ) :
                console.log("Board Loading..")
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '70%'
    }
});

export default BoardList;

// import React from 'react';
// import { StyleSheet, View, Text, FlatList } from 'react-native';
// import palette from '../../../styles/palette';

// const Item = ({ title, writer, date }) => (
//     <View>
//         <View
//             style={ styles.container }
//         >
//             <Text
//                 style={ styles.title }
//             >
//                 { title }
//             </Text>
//             <Text
//                 style={ styles.writer }
//             >
//                 { writer }
//             </Text>
//             <Text
//                 style={ styles.date }
//             >
//                 { date }
//             </Text>
//         </View>
//     </View>
// );

// const BoardList = ({ loading, error, boardList }) => {
//     const DATA = boardList;
//     console.log(DATA);
//     const renderItem = ({ item }) => (
//         <Item 
//             title={ item.title } 
//             writer={ item.writer }
//             date={ item.date }
//         />
//     );

//     return(
//         <View
//             style={ styles.mainContainer }
//         >
//             <FlatList
//                 data={ DATA }
//                 renderItem={ renderItem }
//                 keyExtractor={ item => item._id }
//             />
//         </View>
//     )
// };

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         backgroundColor: palette.white[0]
//     },
//     container: {
//         flexDirection: 'row',
//         width: '100%',
//         height: '25%',
//         padding: 10
//     },
//     title: {
//         width: '70%'
//     },
//     writer: {
//         width: '15%'
//     },
//     date: {
//         width: '15%'
//     }
// });

// export default BoardList;