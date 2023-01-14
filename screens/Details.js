import { Text, FlatList, View } from "react-native"
import DetailsBid from "../components/DetailsBid"

const Details = ({route}) => {
  const { data } = route.params;
  return (
    <View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Details