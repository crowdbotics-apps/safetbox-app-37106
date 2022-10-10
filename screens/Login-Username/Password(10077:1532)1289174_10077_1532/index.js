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
      <View style={styles.View_10077_1533}>
        <View style={styles.View_10077_1534} />
        <View style={styles.View_10077_1535}>
          <View style={styles.View_10077_1536}>
            <View style={styles.View_10077_1537}>
              <Text style={styles.Text_10077_1537}>Sign In</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c59a98ad-d4c4-481a-ba19-678efe490795"
              }}
              style={styles.ImageBackground_10077_1538}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_10077_1539}>
        <Text style={styles.Text_10077_1539}>Create an account</Text>
      </View>
      <View style={styles.View_10077_1540}>
        <Text style={styles.Text_10077_1540}>Use Social Login</Text>
      </View>
      <View style={styles.View_10077_1541}>
        <View style={styles.View_10077_1542}>
          <Text style={styles.Text_10077_1542}>Welcome to </Text>
        </View>
        <View style={styles.View_10077_1543}>
          <Text style={styles.Text_10077_1543}>SafeT Box</Text>
        </View>
        <View style={styles.View_10077_1544}>
          <Text style={styles.Text_10077_1544}>
            Best cloud storage platform for all business and individuals to
            manage there data Join For Free.
          </Text>
        </View>
      </View>
      <View style={styles.View_10077_1545}>
        <View style={styles.View_10077_1546}>
          <View style={styles.View_10077_1547} />
        </View>
        <View style={styles.View_10077_1548}>
          <View style={styles.View_10077_1549}>
            <Text style={styles.Text_10077_1549}>Smart Id</Text>
          </View>
          <View style={styles.View_10077_1550}>
            <View style={styles.View_10077_1551}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4b14c93-843b-4206-a12b-becbc9bc405b"
                }}
                style={styles.ImageBackground_10077_1552}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43c2c2fa-d497-4ecb-95bd-b2ae4aa6cb45"
        }}
        style={styles.ImageBackground_10077_1558}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c266521d-effa-4f78-9ea2-bbb91f7d9c20"
        }}
        style={styles.ImageBackground_10077_1560}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c30f59ab-440d-44c5-a2d5-60d05a746e6b"
        }}
        style={styles.ImageBackground_10077_1562}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83d44f5a-6e04-4f22-927a-8ea0406ff34e"
        }}
        style={styles.ImageBackground_10077_1566}
      />
      <View style={styles.View_10077_1567} />
      <View style={styles.View_10077_1568} />
      <View style={styles.View_10081_2108}>
        <Text style={styles.Text_10081_2108}>Sign In</Text>
      </View>
      <View style={styles.View_10077_1569} />
      <View style={styles.View_10077_1570} />
      <View style={styles.View_10077_1571}>
        <Text style={styles.Text_10077_1571}>Username</Text>
      </View>
      <View style={styles.View_10077_1572}>
        <Text style={styles.Text_10077_1572}>Password</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  View_10077_1533: {
    width: wp("40%"),
    height: hp("11%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_10077_1534: {
    width: wp("40%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 125, 244, 1)"
  },
  View_10077_1535: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_10077_1536: {
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
  View_10077_1537: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10077_1537: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10077_1538: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_10077_1539: {
    width: wp("17%"),
    top: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    justifyContent: "flex-start"
  },
  Text_10077_1539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10077_1540: {
    width: wp("15%"),
    top: hp("147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    justifyContent: "flex-start"
  },
  Text_10077_1540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10077_1541: {
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
  View_10077_1542: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10077_1542: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10077_1543: {
    width: wp("17%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10077_1543: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10077_1544: {
    width: wp("59%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10077_1544: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10077_1545: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("122%")
  },
  View_10077_1546: {
    width: wp("40%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10077_1547: {
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
  View_10077_1548: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_10077_1549: {
    width: wp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_10077_1549: {
    color: "rgba(86, 125, 244, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10077_1550: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10077_1551: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10077_1552: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10077_1558: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_10077_1560: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_10077_1562: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_10077_1566: {
    width: wp("44%"),
    height: hp("46%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    resizeMode: "cover"
  },
  View_10077_1567: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("187%"),
    minHeight: hp("187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.550000011920929
  },
  View_10077_1568: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("62%"),
    backgroundColor: "rgba(222, 220, 220, 1)"
  },
  View_10081_2108: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_10081_2108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10077_1569: {
    width: wp("40%"),
    height: hp("9%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10077_1570: {
    width: wp("40%"),
    height: hp("9%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10077_1571: {
    width: wp("12%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_10077_1571: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10077_1572: {
    width: wp("11%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_10077_1572: {
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
