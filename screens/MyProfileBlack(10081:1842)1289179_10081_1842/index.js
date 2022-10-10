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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2a735a4-bf40-4522-b997-d50fa24b0d92"
        }}
        style={styles.ImageBackground_10081_1843}
      />
      <View style={styles.View_10081_1844}>
        <Text style={styles.Text_10081_1844}>My Profile</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb0879c3-2fbc-4a1c-82a9-08bf6ac2b4ec"
        }}
        style={styles.ImageBackground_10081_1845}
      />
      <View style={styles.View_10081_1849}>
        <Text style={styles.Text_10081_1849}>My SafeT Boxes</Text>
      </View>
      <View style={styles.View_10081_1850}>
        <Text style={styles.Text_10081_1850}>Recent Uploads</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2064236-14eb-4d3d-ace1-de3b04d47431"
        }}
        style={styles.ImageBackground_10081_1851}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75072b75-0374-431f-9da3-8ccf320e6e23"
        }}
        style={styles.ImageBackground_10081_1852}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3baef2f-4828-420c-8a93-977036d3d7e3"
        }}
        style={styles.ImageBackground_10081_1912}
      />
      <View style={styles.View_10081_2038}>
        <View style={styles.View_10081_2039} />
        <View style={styles.View_10081_1899}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad71728d-b075-4b76-a588-70ddf2f0bbeb"
            }}
            style={styles.ImageBackground_10081_1900}
          />
          <View style={styles.View_10081_1901}>
            <View style={styles.View_10081_1902}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f627aba-33fd-4e1b-a1f5-502524f82408"
                }}
                style={styles.ImageBackground_10081_1903}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9da93836-447d-4332-89fe-86a0d5b71bca"
                }}
                style={styles.ImageBackground_10081_1905}
              />
              <View style={styles.View_10081_2035}>
                <Text style={styles.Text_10081_2035}>W</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/949465ba-29de-4c89-8e96-8fd3a09f7a3d"
              }}
              style={styles.ImageBackground_10081_1906}
            />
          </View>
        </View>
        <View style={styles.View_10081_1913}>
          <Text style={styles.Text_10081_1913}> Projects.docx</Text>
        </View>
        <View style={styles.View_10081_1914}>
          <Text style={styles.Text_10081_1914}>300kb</Text>
        </View>
        <View style={styles.View_10081_1915}>
          <Text style={styles.Text_10081_1915}>September 14. 2022</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e99d871-b5d4-4b08-a211-1a94840db6d7"
        }}
        style={styles.ImageBackground_10081_1916}
      />
      <View style={styles.View_10081_1919}>
        <View style={styles.View_10081_1920} />
        <View style={styles.View_10081_1921}>
          <View style={styles.View_10081_1922} />
          <View style={styles.View_10081_1923}>
            <Text style={styles.Text_10081_1923}>PRO</Text>
          </View>
        </View>
        <View style={styles.View_10081_1959}>
          <Text style={styles.Text_10081_1959}>UI / UX Designer</Text>
        </View>
        <View style={styles.View_10081_1960}>
          <Text style={styles.Text_10081_1960}>John Appleseed</Text>
        </View>
        <View style={styles.View_10081_1961}>
          <Text style={styles.Text_10081_1961}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            pretium placerat ut platea.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b9eb512-ecd0-4d13-8100-52db7f4a48a1"
          }}
          style={styles.ImageBackground_10081_1962}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  ImageBackground_10081_1843: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_10081_1844: {
    width: wp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    justifyContent: "flex-start"
  },
  Text_10081_1844: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_1845: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("9%")
  },
  View_10081_1849: {
    width: wp("17%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_10081_1849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1850: {
    width: wp("29%"),
    top: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_10081_1850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_1851: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_10081_1852: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_10081_1912: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_10081_2038: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("166%")
  },
  View_10081_2039: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(3, 49, 102, 1)"
  },
  View_10081_1899: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_10081_1900: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10081_1901: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_10081_1902: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10081_1903: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10081_1905: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10081_2035: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_10081_2035: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_1906: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10081_1913: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_10081_1913: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1914: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_10081_1914: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1915: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_10081_1915: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_1916: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("159%")
  },
  View_10081_1919: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%")
  },
  View_10081_1920: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(130, 180, 255, 1)"
  },
  View_10081_1921: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("5%")
  },
  View_10081_1922: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 49, 123, 1)"
  },
  View_10081_1923: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_10081_1923: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1959: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_10081_1959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1960: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_10081_1960: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1961: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_10081_1961: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_1962: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("6%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
