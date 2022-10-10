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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/652db28f-2316-4979-ba13-e176da1e51c2"
        }}
        style={styles.ImageBackground_10081_1843}
      />
      <View style={styles.View_10081_1844}>
        <Text style={styles.Text_10081_1844}>My Profile</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec44a0cc-befc-4f76-8650-4c380f2baca3"
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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e9d7a51-c2c3-49b2-9504-0998fa812be5"
        }}
        style={styles.ImageBackground_10081_1851}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/260e7783-d949-4a5b-9397-cc28f81dc7a2"
        }}
        style={styles.ImageBackground_10081_1852}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fa2c195-2d5f-4810-ae42-6f826498354d"
        }}
        style={styles.ImageBackground_10081_1912}
      />
      <View style={styles.View_10081_2038}>
        <View style={styles.View_10081_2039} />
        <View style={styles.View_10081_1899}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af2f9621-156b-439b-8607-598cece1a99d"
            }}
            style={styles.ImageBackground_10081_1900}
          />
          <View style={styles.View_10081_1901}>
            <View style={styles.View_10081_1902}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40639737-983d-4c61-8664-9c3642da0afc"
                }}
                style={styles.ImageBackground_10081_1903}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11136516-b3d4-40c3-bf88-541a0d138406"
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
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e63f1af6-174a-453f-9af4-899471d5a339"
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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/979cb21e-5bcd-4937-be20-d24df8463f08"
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
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d47ce76c-ea9e-413e-8224-a72818eab19e"
          }}
          style={styles.ImageBackground_10081_1962}
        />
      </View>
      <View style={styles.View_10081_1963}>
        <View style={styles.View_10081_1964} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27bdd6c9-eb33-4a6e-868b-8d9e2e607626"
          }}
          style={styles.ImageBackground_10081_1965}
        />
        <View style={styles.View_10081_1969}>
          <Text style={styles.Text_10081_1969}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10081_1970}>
          <Text style={styles.Text_10081_1970}>December 20.2020</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3e8f64a-ab4a-4449-9b24-28e791d83398"
          }}
          style={styles.ImageBackground_10081_1971}
        />
      </View>
      <View style={styles.View_10081_1972}>
        <View style={styles.View_10081_1973} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/264c815e-8ff6-4891-842e-377a2cc41120"
          }}
          style={styles.ImageBackground_10081_1974}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da1aeacf-7d18-4e97-868b-d24d4251de6b"
          }}
          style={styles.ImageBackground_10081_1975}
        />
        <View style={styles.View_10081_1979}>
          <Text style={styles.Text_10081_1979}>Prototypes</Text>
        </View>
        <View style={styles.View_10081_1980}>
          <Text style={styles.Text_10081_1980}>Novemaber 22.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2040}>
        <View style={styles.View_10081_2041} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12665816-5651-42c0-be32-8490f64e6549"
          }}
          style={styles.ImageBackground_10081_2042}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eed01404-6626-4b73-b0da-fcef0f631594"
          }}
          style={styles.ImageBackground_10081_2043}
        />
        <View style={styles.View_10081_2047}>
          <Text style={styles.Text_10081_2047}>Prototypes</Text>
        </View>
        <View style={styles.View_10081_2048}>
          <Text style={styles.Text_10081_2048}>Novemaber 22.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_1981}>
        <View style={styles.View_10081_1982} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4636ebe5-72a4-4872-a1cd-0e20fc326599"
          }}
          style={styles.ImageBackground_10081_1983}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01a094c0-63d9-431f-8e4e-6edd0488be36"
          }}
          style={styles.ImageBackground_10081_1984}
        />
        <View style={styles.View_10081_1988}>
          <Text style={styles.Text_10081_1988}>SVG Icons</Text>
        </View>
        <View style={styles.View_10081_1989}>
          <Text style={styles.Text_10081_1989}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_1990}>
        <View style={styles.View_10081_1991} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed6ad4a0-0f3c-45db-b537-0d5c3e1ae60e"
          }}
          style={styles.ImageBackground_10081_1992}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c0975fa-b7de-45e8-9208-b3d7b26f927c"
          }}
          style={styles.ImageBackground_10081_1993}
        />
        <View style={styles.View_10081_1997}>
          <Text style={styles.Text_10081_1997}>Avatars</Text>
        </View>
        <View style={styles.View_10081_1998}>
          <Text style={styles.Text_10081_1998}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2049}>
        <View style={styles.View_10081_2050} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f156058f-d730-42d8-ab8e-e3ced8bbcd4b"
          }}
          style={styles.ImageBackground_10081_2051}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8adb71db-0268-4faf-9269-33deb31474e2"
          }}
          style={styles.ImageBackground_10081_2052}
        />
        <View style={styles.View_10081_2056}>
          <Text style={styles.Text_10081_2056}>Avatars</Text>
        </View>
        <View style={styles.View_10081_2057}>
          <Text style={styles.Text_10081_2057}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_1999}>
        <View style={styles.View_10081_2000} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69f41908-b717-47a4-9020-0bb33876b7d5"
          }}
          style={styles.ImageBackground_10081_2001}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b0fb6ce-5ecc-4020-9f79-5fac2d8ed7bc"
          }}
          style={styles.ImageBackground_10081_2002}
        />
        <View style={styles.View_10081_2006}>
          <Text style={styles.Text_10081_2006}>SVG Icons</Text>
        </View>
        <View style={styles.View_10081_2007}>
          <Text style={styles.Text_10081_2007}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2008}>
        <View style={styles.View_10081_2009} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9263a2af-6511-45ce-be6a-50cdf3716a9a"
          }}
          style={styles.ImageBackground_10081_2010}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/deba7f06-c208-4235-8306-a2bfd51eac5d"
          }}
          style={styles.ImageBackground_10081_2011}
        />
        <View style={styles.View_10081_2015}>
          <Text style={styles.Text_10081_2015}>Avatars</Text>
        </View>
        <View style={styles.View_10081_2016}>
          <Text style={styles.Text_10081_2016}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2058}>
        <View style={styles.View_10081_2059} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/571bab87-dbf5-4aea-ae2d-a5bf6ed59788"
          }}
          style={styles.ImageBackground_10081_2060}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c17f00-ce7e-46fd-b816-6b426ed0b9dc"
          }}
          style={styles.ImageBackground_10081_2061}
        />
        <View style={styles.View_10081_2065}>
          <Text style={styles.Text_10081_2065}>Avatars</Text>
        </View>
        <View style={styles.View_10081_2066}>
          <Text style={styles.Text_10081_2066}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2017}>
        <View style={styles.View_10081_2018} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cf36134-6256-4f25-9251-881867cbefb5"
          }}
          style={styles.ImageBackground_10081_2019}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6f417bc-c3e6-496b-b3e9-dac992767150"
          }}
          style={styles.ImageBackground_10081_2020}
        />
        <View style={styles.View_10081_2024}>
          <Text style={styles.Text_10081_2024}>SVG Icons</Text>
        </View>
        <View style={styles.View_10081_2025}>
          <Text style={styles.Text_10081_2025}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2026}>
        <View style={styles.View_10081_2027} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90c23d8a-9cc7-4b24-ad7e-3a77de28fb7b"
          }}
          style={styles.ImageBackground_10081_2028}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/258caa97-b8a6-4115-8f44-f926f81d59f1"
          }}
          style={styles.ImageBackground_10081_2029}
        />
        <View style={styles.View_10081_2033}>
          <Text style={styles.Text_10081_2033}>Avatars</Text>
        </View>
        <View style={styles.View_10081_2034}>
          <Text style={styles.Text_10081_2034}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10081_2067}>
        <View style={styles.View_10081_2068} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab72d713-2ff7-4c6b-8a48-c840ef815e12"
          }}
          style={styles.ImageBackground_10081_2069}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbb171c3-b3e6-4a1a-b974-affa78c4be67"
          }}
          style={styles.ImageBackground_10081_2070}
        />
        <View style={styles.View_10081_2074}>
          <Text style={styles.Text_10081_2074}>Avatars</Text>
        </View>
        <View style={styles.View_10081_2075}>
          <Text style={styles.Text_10081_2075}>Novemaber 10.2020</Text>
        </View>
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
  },
  View_10081_1963: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("76%")
  },
  View_10081_1964: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_1965: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_1969: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_1969: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1970: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_1970: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10081_1971: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_10081_1972: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("100%")
  },
  View_10081_1973: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_1974: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_1975: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_1979: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_1979: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1980: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_1980: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2040: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("123%")
  },
  View_10081_2041: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2042: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2043: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2047: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2047: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2048: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2048: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1981: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("76%")
  },
  View_10081_1982: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_1983: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_1984: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_1988: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_1988: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1989: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_1989: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1990: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("100%")
  },
  View_10081_1991: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_1992: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_1993: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_1997: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_1997: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1998: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_1998: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2049: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("123%")
  },
  View_10081_2050: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2051: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2052: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2056: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2056: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2057: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2057: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_1999: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("76%")
  },
  View_10081_2000: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2001: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2002: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2006: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2006: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2007: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2007: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2008: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("100%")
  },
  View_10081_2009: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2010: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2011: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2015: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2015: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2016: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2016: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2058: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("123%")
  },
  View_10081_2059: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2060: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2061: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2065: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2065: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2066: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2066: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2017: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("76%")
  },
  View_10081_2018: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2019: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2020: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2024: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2024: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2025: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2025: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2026: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("100%")
  },
  View_10081_2027: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2028: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2029: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2033: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2033: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2034: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2034: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2067: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("123%")
  },
  View_10081_2068: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 238, 238, 1)"
  },
  ImageBackground_10081_2069: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_10081_2070: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_10081_2074: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10081_2074: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2075: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10081_2075: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
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
