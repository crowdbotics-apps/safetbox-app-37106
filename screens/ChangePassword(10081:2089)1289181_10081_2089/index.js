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
      <View style={styles.View_10081_2090}>
        <Text style={styles.Text_10081_2090}>Change Password</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c11bd3e-6a93-4db0-a399-8c2ad32b1f2a"
        }}
        style={styles.ImageBackground_10081_2091}
      />
      <View style={styles.View_10081_2092} />
      <View style={styles.View_10081_2093} />
      <View style={styles.View_10081_2094} />
      <View style={styles.View_10081_2095}>
        <Text style={styles.Text_10081_2095}>Current Password</Text>
      </View>
      <View style={styles.View_10081_2096}>
        <Text style={styles.Text_10081_2096}>New Password</Text>
      </View>
      <View style={styles.View_10081_2097}>
        <Text style={styles.Text_10081_2097}>Confirm new password</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(130, 180, 255, 1)" },
  View_2: { height: hp("187%") },
  View_10081_2090: {
    width: wp("67%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_10081_2090: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_2091: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_10081_2092: {
    width: wp("83%"),
    height: hp("11%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10081_2093: {
    width: wp("83%"),
    height: hp("11%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10081_2094: {
    width: wp("83%"),
    height: hp("11%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10081_2095: {
    width: wp("34%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10081_2095: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2096: {
    width: wp("28%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10081_2096: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2097: {
    width: wp("45%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10081_2097: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
