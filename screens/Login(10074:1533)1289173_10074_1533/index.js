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
      <View style={styles.View_10074_1534}>
        <View style={styles.View_10074_1535} />
        <View style={styles.View_10074_1536}>
          <View style={styles.View_10074_1537}>
            <View style={styles.View_10074_1538}>
              <Text style={styles.Text_10074_1538}>Sign In</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8f2c225-4384-40c1-9ab3-9133027ab4c9"
              }}
              style={styles.ImageBackground_10074_1539}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_10074_1540}>
        <Text style={styles.Text_10074_1540}>Create an account</Text>
      </View>
      <View style={styles.View_10074_1541}>
        <Text style={styles.Text_10074_1541}>Use Social Login</Text>
      </View>
      <View style={styles.View_10074_1542}>
        <View style={styles.View_10074_1543}>
          <Text style={styles.Text_10074_1543}>Welcome to </Text>
        </View>
        <View style={styles.View_10074_1544}>
          <Text style={styles.Text_10074_1544}>SafeT Box</Text>
        </View>
        <View style={styles.View_10074_1545}>
          <Text style={styles.Text_10074_1545}>
            Best cloud storage platform for all business and individuals to
            manage there data Join For Free.
          </Text>
        </View>
      </View>
      <View style={styles.View_10074_1647}>
        <View style={styles.View_10074_1648}>
          <View style={styles.View_10074_1649} />
        </View>
        <View style={styles.View_10074_1650}>
          <View style={styles.View_10074_1651}>
            <Text style={styles.Text_10074_1651}>Smart Id</Text>
          </View>
          <View style={styles.View_10074_1652}>
            <View style={styles.View_10074_1653}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cf7ac30-6c02-4724-9ccb-5a66ed089dea"
                }}
                style={styles.ImageBackground_10074_1654}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0009319e-6d23-45c0-9629-3f9e2ea541dc"
        }}
        style={styles.ImageBackground_10074_1660}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07167fff-98b2-46ee-a787-c80baeb94210"
        }}
        style={styles.ImageBackground_10074_1662}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad096f29-6a4b-4d5b-9acf-b2c722a820f7"
        }}
        style={styles.ImageBackground_10074_1664}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b90185a-d17c-4b70-b3ec-941e05b4244d"
        }}
        style={styles.ImageBackground_10077_1526}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  View_10074_1534: {
    width: wp("40%"),
    height: hp("11%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_10074_1535: {
    width: wp("40%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 125, 244, 1)"
  },
  View_10074_1536: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_10074_1537: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10074_1538: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10074_1538: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10074_1539: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_10074_1540: {
    width: wp("17%"),
    top: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    justifyContent: "flex-start"
  },
  Text_10074_1540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10074_1541: {
    width: wp("15%"),
    top: hp("147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    justifyContent: "flex-start"
  },
  Text_10074_1541: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10074_1542: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("69%")
  },
  View_10074_1543: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10074_1543: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10074_1544: {
    width: wp("17%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10074_1544: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10074_1545: {
    width: wp("59%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10074_1545: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10074_1647: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("123%")
  },
  View_10074_1648: {
    width: wp("40%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10074_1649: {
    width: wp("40%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(226, 234, 238, 1)",
    borderColor: "rgba(86, 125, 244, 1)",
    borderWidth: 1
  },
  View_10074_1650: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%")
  },
  View_10074_1651: {
    width: wp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_10074_1651: {
    color: "rgba(86, 125, 244, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10074_1652: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10074_1653: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10074_1654: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10074_1660: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_10074_1662: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_10074_1664: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_10077_1526: {
    width: wp("44%"),
    height: hp("46%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
