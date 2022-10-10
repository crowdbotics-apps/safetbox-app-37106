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
      <View style={styles.View_10080_1603}>
        <View style={styles.View_10080_1604}>
          <Text style={styles.Text_10080_1604}>
            Home Profile Storage Shared Stats Settings Help
          </Text>
        </View>
      </View>
      <View style={styles.View_10080_1606}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b5bcb1b-1fc7-4239-bb75-17e5c90c7da8"
          }}
          style={styles.ImageBackground_10080_1607}
        />
        <View style={styles.View_10080_1608}>
          <Text style={styles.Text_10080_1608}>Logout</Text>
        </View>
      </View>
      <View style={styles.View_10080_1609}>
        <View style={styles.View_10080_1610} />
        <View style={styles.View_10080_1611}>
          <View style={styles.View_10080_1612}>
            <Text style={styles.Text_10080_1612}>John Appleseed</Text>
          </View>
          <View style={styles.View_10080_1613}>
            <Text style={styles.Text_10080_1613}>Atlanta, Georgia</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d709589-8d52-48c9-959a-345d8617900d"
          }}
          style={styles.ImageBackground_10080_1654}
        />
      </View>
      <View style={styles.View_10080_1649}>
        <Text style={styles.Text_10080_1649}>Version 1.0.1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41531b10-1d9b-4237-90c7-f2016e67859e"
        }}
        style={styles.ImageBackground_10080_1650}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(130, 180, 255, 1)" },
  View_2: { height: hp("187%") },
  View_10080_1603: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("87%"),
    minHeight: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("50%")
  },
  View_10080_1604: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10080_1604: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10080_1606: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("158%")
  },
  ImageBackground_10080_1607: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10080_1608: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_10080_1608: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10080_1609: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10080_1610: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 53.5,
    borderBottomRightRadius: 0
  },
  View_10080_1611: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%")
  },
  View_10080_1612: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10080_1612: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10080_1613: {
    width: wp("24%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10080_1613: {
    color: "rgba(123, 127, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10080_1654: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_10080_1649: {
    width: wp("17%"),
    top: hp("177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_10080_1649: {
    color: "rgba(58, 66, 118, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6,
    textTransform: "none"
  },
  ImageBackground_10080_1650: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("7%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
