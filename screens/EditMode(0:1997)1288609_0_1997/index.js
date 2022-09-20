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
      <View style={styles.View_0_2015}>
        <View source={{ uri: "null" }} style={styles.View_I0_2015_0_3062} />
        <View style={styles.View_I0_2015_0_3082}>
          <View style={styles.View_I0_2015_0_3076}>
            <View style={styles.View_I0_2015_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_2015_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/970bc265-8e47-4650-b7c1-3854e7f7fd1f"
                }}
                style={styles.ImageBackground_I0_2015_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6896d2d-7e55-460d-b5db-55c6f8fdc0df"
                }}
                style={styles.ImageBackground_I0_2015_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9d80258-05d7-4573-a2bc-2e23b647db08"
              }}
              style={styles.ImageBackground_I0_2015_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2b3fbae-85e5-4340-8408-2fb39fefe2d1"
              }}
              style={styles.ImageBackground_I0_2015_0_3075}
            />
          </View>
          <View style={styles.View_I0_2015_0_3077}>
            <Text style={styles.Text_I0_2015_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cf68d5b-ebba-4ca5-9005-9aff7691569a"
            }}
            style={styles.ImageBackground_I0_2015_0_3081}
          />
        </View>
        <View style={styles.View_I0_2015_0_3083}>
          <Text style={styles.Text_I0_2015_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I0_2015_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a202055c-4157-460f-8079-33402172d195"
            }}
            style={styles.ImageBackground_I0_2015_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6d02ae9-3a07-4e25-8473-fc2bdac6aa6f"
            }}
            style={styles.ImageBackground_I0_2015_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_0_2018}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bdbb959-b856-4c52-9496-8f5ba1d4f05b"
          }}
          style={styles.ImageBackground_0_2016}
        />
        <View style={styles.View_0_2017}>
          <Text style={styles.Text_0_2017}>A</Text>
        </View>
      </View>
      <View style={styles.View_0_2021}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02acb94c-8917-4a56-bd60-084a70b68c81"
          }}
          style={styles.ImageBackground_0_2019}
        />
        <View style={styles.View_0_2020}>
          <Text style={styles.Text_0_2020}>B</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28727c3a-f1bc-47c3-b089-6aa2fa2ceeab"
        }}
        style={styles.ImageBackground_0_2022}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16506928-a0b1-4316-8f1b-18dcaac23325"
        }}
        style={styles.ImageBackground_0_2023}
      />
      <View style={styles.View_0_2024}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dcc6674-2f6c-41d0-ada4-235d19170972"
          }}
          style={styles.ImageBackground_I0_2024_0_3118}
        />
        <View style={styles.View_I0_2024_0_3132}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/069656e0-752f-4e58-9d32-0a4926d98d30"
            }}
            style={styles.ImageBackground_I0_2024_0_3119}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c726de1e-86a8-4951-ad02-9b0e3e00378d"
            }}
            style={styles.ImageBackground_I0_2024_0_3120}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b10e8142-f9b7-4987-8be8-8f6bdb299a78"
            }}
            style={styles.ImageBackground_I0_2024_0_3121}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f41052f-dfc1-4a44-a5d4-ec1edb0aa39d"
            }}
            style={styles.ImageBackground_I0_2024_0_3122}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6bb9e49-b77c-4a8d-8431-0256b4c7ccc0"
            }}
            style={styles.ImageBackground_I0_2024_0_3123}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abc8cf07-16ff-4ace-93f9-69e5dae46806"
            }}
            style={styles.ImageBackground_I0_2024_0_3124}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1c028a3-a79a-4642-94e0-fafe910d64f0"
            }}
            style={styles.ImageBackground_I0_2024_0_3125}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ac363be-133f-49e3-a3b9-f7ad73b6cefc"
            }}
            style={styles.ImageBackground_I0_2024_0_3126}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40eea463-86d7-47e2-8879-a95ad2cb6816"
            }}
            style={styles.ImageBackground_I0_2024_0_3127}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3849466-992a-4c88-ac64-b56e88e6c3d4"
            }}
            style={styles.ImageBackground_I0_2024_0_3128}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52f0a802-4496-422e-9b74-bd3caf778228"
            }}
            style={styles.ImageBackground_I0_2024_0_3129}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db422fe8-d069-470b-bb3f-c1de240e50ae"
            }}
            style={styles.ImageBackground_I0_2024_0_3130}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eda17aa2-e33d-4de9-b5b3-6e064cb75800"
            }}
            style={styles.ImageBackground_I0_2024_0_3131}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32c64076-21f1-415c-985c-c3a6508d38fe"
        }}
        style={styles.ImageBackground_0_2038}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ad52ce8-7837-4f2c-aa25-0d4d26c8d6cb"
        }}
        style={styles.ImageBackground_0_2052}
      />
      <View style={styles.View_0_2059}>
        <View style={styles.View_0_2053}>
          <Text style={styles.Text_0_2053}>Lorem Ipsum Dolor Narwhal.midi</Text>
        </View>
        <View style={styles.View_0_2054}>
          <Text style={styles.Text_0_2054}>
            Music file, 3 min long Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2058}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bcb2920-b06d-4804-bf30-162bd0f3443f"
            }}
            style={styles.ImageBackground_0_2055}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9cb5e1f-29e4-4794-afd9-05e7b8be5269"
            }}
            style={styles.ImageBackground_0_2056}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbf91422-7db9-47b2-a6f7-fd85c1a53b99"
            }}
            style={styles.ImageBackground_0_2057}
          />
        </View>
      </View>
      <View style={styles.View_0_2066}>
        <View style={styles.View_0_2060}>
          <Text style={styles.Text_0_2060}>Lorem Ipsum Dolor Narwhal.midi</Text>
        </View>
        <View style={styles.View_0_2061}>
          <Text style={styles.Text_0_2061}>
            Music file, 3 min long Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2065}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/586f142b-7e8e-4dae-aaa3-99cd39aa28f1"
            }}
            style={styles.ImageBackground_0_2062}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10209b23-728b-4a4d-b557-e95c4a8229bc"
            }}
            style={styles.ImageBackground_0_2063}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/464e802e-4fc4-4791-b6cb-a1c3cb7757b6"
            }}
            style={styles.ImageBackground_0_2064}
          />
        </View>
      </View>
      <View style={styles.View_0_2073}>
        <View style={styles.View_0_2067}>
          <Text style={styles.Text_0_2067}>Lorem Ipsum Dolor Narwhal.midi</Text>
        </View>
        <View style={styles.View_0_2068}>
          <Text style={styles.Text_0_2068}>
            Music file, 3 min long Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2072}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b18509b4-ba4f-48d5-8cc8-02f0fe2aec81"
            }}
            style={styles.ImageBackground_0_2069}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fa06c93-92e9-4478-a05e-016ca3e0e56f"
            }}
            style={styles.ImageBackground_0_2070}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2412bb9b-d11a-413b-ab96-e23af77fe1b1"
            }}
            style={styles.ImageBackground_0_2071}
          />
        </View>
      </View>
      <View style={styles.View_0_2080}>
        <View style={styles.View_0_2074}>
          <Text style={styles.Text_0_2074}>Lorem Spreadsheet 18.xls</Text>
        </View>
        <View style={styles.View_0_2075}>
          <Text style={styles.Text_0_2075}>
            Spreadsheet, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2079}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9f8e508-dd14-4161-a78f-95c25d34ccc2"
            }}
            style={styles.ImageBackground_0_2076}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f1a4b67-dddb-4535-a214-d58f275f57d0"
            }}
            style={styles.ImageBackground_0_2077}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/962e9f06-3a17-4767-a208-c4532d23cd88"
            }}
            style={styles.ImageBackground_0_2078}
          />
        </View>
      </View>
      <View style={styles.View_0_2087}>
        <View style={styles.View_0_2081}>
          <Text style={styles.Text_0_2081}>Lorem Ipsum Spreadsheet 18.xls</Text>
        </View>
        <View style={styles.View_0_2082}>
          <Text style={styles.Text_0_2082}>
            Spreadsheet, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2086}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5a7df2e-4cdf-4675-9ab8-d356ff369089"
            }}
            style={styles.ImageBackground_0_2083}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e95e2bf-ea0d-4c2a-8800-51a7c2cb827c"
            }}
            style={styles.ImageBackground_0_2084}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8053fbbd-adb1-469d-a7b1-d4c658ac711b"
            }}
            style={styles.ImageBackground_0_2085}
          />
        </View>
      </View>
      <View style={styles.View_0_2094}>
        <View style={styles.View_0_2088}>
          <Text style={styles.Text_0_2088}>Lorem Ipsum Doc.doc</Text>
        </View>
        <View style={styles.View_0_2089}>
          <Text style={styles.Text_0_2089}>
            Document, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b545e1e-fdca-47ba-9dc7-d27ac74fdcb4"
            }}
            style={styles.ImageBackground_0_2090}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d43b3d8-6c20-40d7-ac1b-3c64777b17c2"
            }}
            style={styles.ImageBackground_0_2091}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc086484-c660-4ac8-a9eb-d321d2312dbb"
            }}
            style={styles.ImageBackground_0_2092}
          />
        </View>
      </View>
      <View style={styles.View_0_2101}>
        <View style={styles.View_0_2095}>
          <Text style={styles.Text_0_2095}>Lorem Ipsum Doc.pdf</Text>
        </View>
        <View style={styles.View_0_2096}>
          <Text style={styles.Text_0_2096}>
            Document, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2100}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97affc7f-a02a-40aa-98cf-07bd3a859a8a"
            }}
            style={styles.ImageBackground_0_2097}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8bf10a2-16bc-4c5c-9ad3-37124d0fd8cd"
            }}
            style={styles.ImageBackground_0_2098}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/977db7f7-8ce1-4bb1-aa41-8ae2ab09fc5b"
            }}
            style={styles.ImageBackground_0_2099}
          />
        </View>
      </View>
      <View style={styles.View_0_2108}>
        <View style={styles.View_0_2102}>
          <Text style={styles.Text_0_2102}>Lorem Ipsum Doc.pdf</Text>
        </View>
        <View style={styles.View_0_2103}>
          <Text style={styles.Text_0_2103}>
            Document, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2107}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15ceb06c-2778-4fc5-aca3-400fa4de4c9a"
            }}
            style={styles.ImageBackground_0_2104}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1aa8fca-21ae-4f64-a552-2ba9f2ecb8d8"
            }}
            style={styles.ImageBackground_0_2105}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9e9f7ce-8667-4dc1-aa0e-ca34ad926d3a"
            }}
            style={styles.ImageBackground_0_2106}
          />
        </View>
      </View>
      <View style={styles.View_0_2115}>
        <View style={styles.View_0_2109}>
          <Text style={styles.Text_0_2109}>IMG_89998.jpeg</Text>
        </View>
        <View style={styles.View_0_2110}>
          <Text style={styles.Text_0_2110}>
            Picture, large file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2114}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e1d4f0c-3476-40e8-86fd-e85f90d3889b"
            }}
            style={styles.ImageBackground_0_2111}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84d4f806-85e3-49bc-993e-d45618f1cf05"
            }}
            style={styles.ImageBackground_0_2112}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b19da6b0-a22a-42cf-96ff-6cce3a0bd980"
            }}
            style={styles.ImageBackground_0_2113}
          />
        </View>
      </View>
      <View style={styles.View_0_2122}>
        <View style={styles.View_0_2116}>
          <Text style={styles.Text_0_2116}>IMG_89998.jpeg</Text>
        </View>
        <View style={styles.View_0_2117}>
          <Text style={styles.Text_0_2117}>
            Picture, large file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2121}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f1764a9-094d-48d3-a2e6-a5d642fbaaac"
            }}
            style={styles.ImageBackground_0_2118}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f393e14-e056-45a9-ae12-91244ecb74d9"
            }}
            style={styles.ImageBackground_0_2119}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1681ccbe-4bdb-41fb-b529-43c5dee630f2"
            }}
            style={styles.ImageBackground_0_2120}
          />
        </View>
      </View>
      <View style={styles.View_0_2123}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f21f6615-2437-47fb-8e68-6e02a7f5c92c"
          }}
          style={styles.ImageBackground_I0_2123_0_3103}
        />
        <View style={styles.View_I0_2123_0_3104}>
          <Text style={styles.Text_I0_2123_0_3104}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_2124}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc7aaa09-3e99-42f7-bea4-effc1a29bc4c"
          }}
          style={styles.ImageBackground_I0_2124_0_3103}
        />
        <View style={styles.View_I0_2124_0_3104}>
          <Text style={styles.Text_I0_2124_0_3104}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_2125}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b80add7-f835-46e3-8c73-16715f6b0192"
          }}
          style={styles.ImageBackground_I0_2125_0_3105}
        />
        <View style={styles.View_I0_2125_0_3106}>
          <Text style={styles.Text_I0_2125_0_3106}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_2137}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e05dafc-f4ff-4628-a92d-2eb04481cda9"
          }}
          style={styles.ImageBackground_0_2126}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54bf9e61-f75a-4c97-ad6d-7157c3370c6e"
          }}
          style={styles.ImageBackground_0_2136}
        />
      </View>
      <View style={styles.View_0_2149}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6186ed95-c5ec-49c6-9857-9360230b847c"
          }}
          style={styles.ImageBackground_0_2138}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fa7a32f-e11a-416e-a7a4-c7cfe4a7362a"
          }}
          style={styles.ImageBackground_0_2148}
        />
      </View>
      <View style={styles.View_0_2150}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7584a437-84bc-4163-b050-19e1204ca3f6"
          }}
          style={styles.ImageBackground_I0_2150_0_3100}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2648be17-3606-4695-9e7c-114796c45062"
          }}
          style={styles.ImageBackground_I0_2150_0_3101}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f878efd-4eaa-4959-950a-e9c9ad571415"
          }}
          style={styles.ImageBackground_I0_2150_0_3102}
        />
      </View>
      <View style={styles.View_0_2154}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1673417e-20b9-4851-979c-9e3d45e28686"
          }}
          style={styles.ImageBackground_0_2151}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96f3ea04-d932-44fd-9649-0d2814ffcef5"
          }}
          style={styles.ImageBackground_0_2152}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abb132c4-5425-4cd3-952f-9e40fedbd58d"
          }}
          style={styles.ImageBackground_0_2153}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5583914a-b228-45c7-b77b-75b6474aac86"
        }}
        style={styles.ImageBackground_0_2155}
      />
      <View style={styles.View_0_2162}>
        <View style={styles.View_0_2156}>
          <Text style={styles.Text_0_2156}>Lorem Spreadsheet 18.xls</Text>
        </View>
        <View style={styles.View_0_2157}>
          <Text style={styles.Text_0_2157}>
            Spreadsheet, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_2161}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/701478db-6c6d-4f89-b027-58b7822f1651"
            }}
            style={styles.ImageBackground_0_2158}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0363a72-7250-4d73-a131-4a5c8c049ad9"
            }}
            style={styles.ImageBackground_0_2159}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/626fda8c-7210-4542-9a08-01ef1ecfadc5"
            }}
            style={styles.ImageBackground_0_2160}
          />
        </View>
      </View>
      <View style={styles.View_0_2174}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfd80ade-80c5-4e3c-bfaa-03e2962bfa00"
          }}
          style={styles.ImageBackground_0_2163}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ce16d59-3d03-430e-a5e2-dd8b5c9107c8"
          }}
          style={styles.ImageBackground_0_2173}
        />
      </View>
      <View style={styles.View_0_2175}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52d1ae1e-c560-4b2e-8966-c004666cf27d"
          }}
          style={styles.ImageBackground_I0_2175_0_2786}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a850321-3dfd-45eb-8b0a-3e6e3f6b379d"
          }}
          style={styles.ImageBackground_I0_2175_0_2788}
        />
      </View>
      <View style={styles.View_0_2186}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f15ac53-6eaf-483c-9a1d-1a11fea01c30"
          }}
          style={styles.ImageBackground_0_2176}
        />
        <View style={styles.View_0_2177}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7216d223-7a21-4f56-868a-28ae0ef0e22e"
            }}
            style={styles.ImageBackground_I0_2177_0_2786}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c97cf5d-c41a-4ac3-b545-aae1dff8df87"
            }}
            style={styles.ImageBackground_I0_2177_0_2788}
          />
        </View>
        <View style={styles.View_0_2184}>
          <View style={styles.View_0_2178}>
            <Text style={styles.Text_0_2178}>Lorem Ipsum.doc</Text>
          </View>
          <View style={styles.View_0_2179}>
            <Text style={styles.Text_0_2179}>
              Spreadsheet, small file Mar 13, 2018
            </Text>
          </View>
          <View style={styles.View_0_2183}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e05265ac-b015-479d-890f-ce76a52428e6"
              }}
              style={styles.ImageBackground_0_2180}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d64b7ba-7d43-423a-aa20-4543807e5cb1"
              }}
              style={styles.ImageBackground_0_2181}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdb4bd4d-72ad-43a3-ad94-3d935943a766"
              }}
              style={styles.ImageBackground_0_2182}
            />
          </View>
        </View>
        <View style={styles.View_0_2185}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6939387d-9385-4479-92b3-c4cc56e77fb7"
            }}
            style={styles.ImageBackground_I0_2185_0_3105}
          />
          <View style={styles.View_I0_2185_0_3106}>
            <Text style={styles.Text_I0_2185_0_3106}>Aa</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cfd4bd8-e47f-4277-b6ce-565971dafc4e"
        }}
        style={styles.ImageBackground_0_2187}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f77a778-bfb0-4a2d-a6d5-5b3164771053"
        }}
        style={styles.ImageBackground_0_2188}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbec4575-a32d-43d9-aa38-b36b69cb662b"
        }}
        style={styles.ImageBackground_0_2189}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2453d924-4a8b-4bcc-acc9-105f70e48ecc"
        }}
        style={styles.ImageBackground_0_2190}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8377e267-1168-405d-a2c8-c7ee6c3d40c4"
        }}
        style={styles.ImageBackground_0_2191}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a797fce8-e4c7-4b26-9ba0-34da1f248fc5"
        }}
        style={styles.ImageBackground_0_2192}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13a602b0-afc6-4bdc-903e-47ab22a59c93"
        }}
        style={styles.ImageBackground_0_2193}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ddb6136-5e42-41ac-bbdf-d0529f941f77"
        }}
        style={styles.ImageBackground_0_2194}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ac10c41-8c17-4391-b030-f55a2367cfd5"
        }}
        style={styles.ImageBackground_0_2195}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec2d1678-81a6-4bee-9b60-a3fbcaaa712b"
        }}
        style={styles.ImageBackground_0_2196}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0294995-e421-4d64-81c0-d1322137f894"
        }}
        style={styles.ImageBackground_0_2197}
      />
      <View style={styles.View_0_2205}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/185a1dfc-4376-4f7c-a303-8d960d01a476"
          }}
          style={styles.ImageBackground_0_2198}
        />
        <View style={styles.View_0_2199}>
          <Text style={styles.Text_0_2199}>Copy</Text>
        </View>
        <View style={styles.View_0_2200}>
          <Text style={styles.Text_0_2200}>Secure Share</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceb7e12f-e563-42cd-8dd3-1c66891504f2"
          }}
          style={styles.ImageBackground_0_2204}
        />
      </View>
      <View style={styles.View_0_2217}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a798579f-f7d5-428b-aa40-a192c03cc673"
          }}
          style={styles.ImageBackground_0_2206}
        />
        <View style={styles.View_0_2208} />
        <View style={styles.View_0_2209}>
          <Text style={styles.Text_0_2209}>2 files selected</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_0_2212}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_2014"))
          }
        >
          <View source={{ uri: "null" }} style={styles.View_0_2210} />
          <View style={styles.View_0_2211}>
            <Text style={styles.Text_0_2211}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_0_2214}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/407bffb8-990b-4636-91dd-2e5ebde980ba"
            }}
            style={styles.ImageBackground_I0_2214_0_2758}
          />
          <View style={styles.View_I0_2214_0_2759}>
            <Text style={styles.Text_I0_2214_0_2759}>Search</Text>
          </View>
          <View style={styles.View_I0_2214_0_2762}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3663ea0-598e-4f11-b28d-b7437b821da4"
              }}
              style={styles.ImageBackground_I0_2214_0_2760}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b3f5d6e-0d6f-4102-8afd-8a30527b54b4"
              }}
              style={styles.ImageBackground_I0_2214_0_2761}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("187%") },
  View_0_2015: {
    width: wp("100%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2015_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2015_0_3082: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2015_0_3076: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2015_0_3067: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2015_0_3063: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2015_0_3066: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2015_0_3065: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2015_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I0_2015_0_3075: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I0_2015_0_3077: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_2015_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_2015_0_3081: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_2015_0_3083: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_2015_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2015_0_3093: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2015_0_3088: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2015_0_3092: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_0_2018: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-28%")
  },
  ImageBackground_0_2016: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2017: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_0_2017: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2021: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-28%")
  },
  ImageBackground_0_2019: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2020: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_0_2020: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2022: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("97%")
  },
  ImageBackground_0_2023: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("160%")
  },
  View_0_2024: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2024_0_3118: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2024_0_3132: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2024_0_3119: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_2024_0_3120: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_2024_0_3121: {
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I0_2024_0_3122: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I0_2024_0_3123: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I0_2024_0_3124: {
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  ImageBackground_I0_2024_0_3125: {
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_2024_0_3126: {
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I0_2024_0_3127: {
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I0_2024_0_3128: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_I0_2024_0_3129: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_I0_2024_0_3130: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  ImageBackground_I0_2024_0_3131: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_0_2038: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_2052: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_0_2059: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2053: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2053: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2054: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2054: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2058: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2055: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2056: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2057: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2066: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2060: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2060: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2061: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2061: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2065: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2062: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2063: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2064: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2073: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("161%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2067: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2067: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2068: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2068: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2072: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2069: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2070: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2071: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2080: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2074: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2074: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2075: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2075: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2079: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2076: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2077: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2078: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2087: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2081: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2081: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2082: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2082: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2086: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2083: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2084: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2085: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2094: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2088: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2088: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2089: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2089: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2093: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2090: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2091: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2092: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2101: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2095: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2095: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2096: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2096: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2100: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2097: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2098: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2099: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2108: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2102: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2102: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2103: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2103: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2107: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2104: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2105: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2106: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2115: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2109: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2109: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2110: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2110: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2114: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2111: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2112: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2113: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2122: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2116: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2116: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2117: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2117: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2121: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_2118: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2119: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2120: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2123: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2123_0_3103: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2123_0_3104: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_2123_0_3104: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2124: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2124_0_3103: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2124_0_3104: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_2124_0_3104: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2125: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2125_0_3105: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2125_0_3106: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_2125_0_3106: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2137: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_2126: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2136: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_2149: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_2138: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2148: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_2150: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2150_0_3100: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2150_0_3101: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_I0_2150_0_3102: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_0_2154: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_2151: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2152: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2153: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_0_2155: {
    width: wp("100%"),
    height: hp("14%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2162: {
    width: wp("75%"),
    height: hp("7%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2156: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2156: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2157: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2157: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2161: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_0_2158: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2159: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2160: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2174: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_2163: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2173: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_2175: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2175_0_2786: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2175_0_2788: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_0_2186: {
    width: wp("106%"),
    height: hp("13%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2176: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2177: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2177_0_2786: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2177_0_2788: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_0_2184: {
    width: wp("75%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_0_2178: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2178: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2179: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_2179: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2183: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_0_2180: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_2181: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_2182: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_2185: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2185_0_3105: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2185_0_3106: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_2185_0_3106: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2187: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%")
  },
  ImageBackground_0_2188: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("73%")
  },
  ImageBackground_0_2189: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("86%")
  },
  ImageBackground_0_2190: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("99%")
  },
  ImageBackground_0_2191: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("111%")
  },
  ImageBackground_0_2192: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("124%")
  },
  ImageBackground_0_2193: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("137%")
  },
  ImageBackground_0_2194: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("149%")
  },
  ImageBackground_0_2195: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("162%")
  },
  ImageBackground_0_2196: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("175%")
  },
  ImageBackground_0_2197: {
    width: wp("95%"),
    height: hp("0%"),
    top: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_0_2205: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2198: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2199: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_0_2199: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2200: {
    width: wp("26%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    justifyContent: "flex-start"
  },
  Text_0_2200: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2204: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_0_2217: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2206: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2208: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2209: {
    width: wp("28%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_0_2209: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_2212: {
    width: wp("45%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_0_2210: {
    width: wp("45%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2211: {
    width: wp("14%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    justifyContent: "flex-start"
  },
  Text_0_2211: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2214: {
    width: wp("91%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2214_0_2758: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2214_0_2759: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_2214_0_2759: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2214_0_2762: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2214_0_2760: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2214_0_2761: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
