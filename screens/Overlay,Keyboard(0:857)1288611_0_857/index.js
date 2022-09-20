import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/addc88b1-ae09-4ec5-ba5a-dd2e85e0b874"
        }}
        style={styles.ImageBackground_0_2419}
      />
      <View style={styles.View_0_2431}>
        <View style={styles.View_0_2430}>
          <View style={styles.View_0_2429}>
            <View source={{ uri: "null" }} style={styles.View_0_2420} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01e66d43-1a73-4c8d-bf3c-ff353f164a2c"
              }}
              style={styles.ImageBackground_0_2428}
            />
            <View style={styles.View_0_2427}>
              <View style={styles.View_0_2426}>
                <View source={{ uri: "null" }} style={styles.View_0_2421} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1b9c40b-27ec-4e9b-bc54-017696c51aef"
                  }}
                  style={styles.ImageBackground_0_2425}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d9307ce-8bf6-42d5-b83e-9368f9ec4019"
                  }}
                  style={styles.ImageBackground_0_2424}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_0_2419: {
    width: wp("100%"),
    height: hp("99%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2431: {
    width: wp("960%"),
    height: hp("5582%"),
    top: hp("-4065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-950%")
  },
  View_0_2430: {
    width: wp("960%"),
    height: hp("5582%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2429: {
    width: wp("960%"),
    height: hp("5582%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2420: {
    width: wp("960%"),
    height: hp("5582%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2428: {
    width: wp("960%"),
    height: hp("5582%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2427: {
    width: wp("960%"),
    height: hp("5582%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2426: {
    width: wp("17%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2421: {
    width: wp("17%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2425: {
    width: wp("17%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2424: {
    width: wp("17%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
