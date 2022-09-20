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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1525e4e7-e1b8-4d1c-b11a-15da35d5f202"
        }}
        style={styles.ImageBackground_10015_3035}
      />
      <View style={styles.View_10015_3036}>
        <View source={{ uri: "null" }} style={styles.View_I10015_3036_0_3062} />
        <View style={styles.View_I10015_3036_0_3082}>
          <View style={styles.View_I10015_3036_0_3076}>
            <View style={styles.View_I10015_3036_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I10015_3036_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e45d39fe-96d5-4e6c-a734-c183ac64d096"
                }}
                style={styles.ImageBackground_I10015_3036_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e458b19e-444f-4663-8027-635a13b5a4e2"
                }}
                style={styles.ImageBackground_I10015_3036_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b86a8ad9-43e8-41d6-9a63-d8d039259f14"
              }}
              style={styles.ImageBackground_I10015_3036_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18ddd8ef-125a-4cb3-87f7-7bae3d99d85a"
              }}
              style={styles.ImageBackground_I10015_3036_0_3075}
            />
          </View>
          <View style={styles.View_I10015_3036_0_3077}>
            <Text style={styles.Text_I10015_3036_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f97ab838-b8d8-4f1b-8f8f-afaff668d05d"
            }}
            style={styles.ImageBackground_I10015_3036_0_3081}
          />
        </View>
        <View style={styles.View_I10015_3036_0_3083}>
          <Text style={styles.Text_I10015_3036_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I10015_3036_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c32eb870-7d6d-4c22-ab43-6f689e426abe"
            }}
            style={styles.ImageBackground_I10015_3036_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68e0f0d7-2719-4fee-a488-5426b968d6b6"
            }}
            style={styles.ImageBackground_I10015_3036_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_10015_3037}>
        <Text style={styles.Text_10015_3037}>
          Welcome. What is your phone number?
        </Text>
      </View>
      <View style={styles.View_10015_3038}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66499e96-f16b-4b2a-80c3-5b04d2e7e041"
          }}
          style={styles.ImageBackground_I10015_3038_0_2939}
        />
        <View style={styles.View_I10015_3038_0_2944}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8838c65-8027-4d1f-bc54-01964e4581c0"
            }}
            style={styles.ImageBackground_I10015_3038_0_2943}
          />
        </View>
        <View style={styles.View_I10015_3038_0_2952}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I10015_3038_0_2945}
          />
          <View style={styles.View_I10015_3038_0_2948}>
            <View style={styles.View_I10015_3038_0_2946}>
              <Text style={styles.Text_I10015_3038_0_2946}> </Text>
            </View>
            <View style={styles.View_I10015_3038_0_2947}>
              <Text style={styles.Text_I10015_3038_0_2947}> </Text>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_2951}>
            <View style={styles.View_I10015_3038_0_2949}>
              <Text style={styles.Text_I10015_3038_0_2949}>0</Text>
            </View>
            <View style={styles.View_I10015_3038_0_2950}>
              <Text style={styles.Text_I10015_3038_0_2950}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I10015_3038_0_2957}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I10015_3038_0_2953}
          />
          <View style={styles.View_I10015_3038_0_2956}>
            <View style={styles.View_I10015_3038_0_2954}>
              <Text style={styles.Text_I10015_3038_0_2954}>PGRS</Text>
            </View>
            <View style={styles.View_I10015_3038_0_2955}>
              <Text style={styles.Text_I10015_3038_0_2955}>PGRS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I10015_3038_0_3027}>
          <View style={styles.View_I10015_3038_0_2965}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_2958}
            />
            <View style={styles.View_I10015_3038_0_2961}>
              <View style={styles.View_I10015_3038_0_2959}>
                <Text style={styles.Text_I10015_3038_0_2959}>WXYZ</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d82d797-b355-46c6-ad1a-1248839a6418"
                }}
                style={styles.ImageBackground_I10015_3038_0_2960}
              />
            </View>
            <View style={styles.View_I10015_3038_0_2964}>
              <View style={styles.View_I10015_3038_0_2962}>
                <Text style={styles.Text_I10015_3038_0_2962}>9</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2963}>
                <Text style={styles.Text_I10015_3038_0_2963}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_2970}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_2966}
            />
            <View style={styles.View_I10015_3038_0_2969}>
              <View style={styles.View_I10015_3038_0_2967}>
                <Text style={styles.Text_I10015_3038_0_2967}>8</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2968}>
                <Text style={styles.Text_I10015_3038_0_2968}>8</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_2978}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_2971}
            />
            <View style={styles.View_I10015_3038_0_2974}>
              <View style={styles.View_I10015_3038_0_2972}>
                <Text style={styles.Text_I10015_3038_0_2972}>PGRS</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2973}>
                <Text style={styles.Text_I10015_3038_0_2973}>PGRS</Text>
              </View>
            </View>
            <View style={styles.View_I10015_3038_0_2977}>
              <View style={styles.View_I10015_3038_0_2975}>
                <Text style={styles.Text_I10015_3038_0_2975}>7</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2976}>
                <Text style={styles.Text_I10015_3038_0_2976}>7</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_2986}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_2979}
            />
            <View style={styles.View_I10015_3038_0_2982}>
              <View style={styles.View_I10015_3038_0_2980}>
                <Text style={styles.Text_I10015_3038_0_2980}>MNO</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2981}>
                <Text style={styles.Text_I10015_3038_0_2981}>MNO</Text>
              </View>
            </View>
            <View style={styles.View_I10015_3038_0_2985}>
              <View style={styles.View_I10015_3038_0_2983}>
                <Text style={styles.Text_I10015_3038_0_2983}>6</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2984}>
                <Text style={styles.Text_I10015_3038_0_2984}>6</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_2994}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_2987}
            />
            <View style={styles.View_I10015_3038_0_2990}>
              <View style={styles.View_I10015_3038_0_2988}>
                <Text style={styles.Text_I10015_3038_0_2988}>JKL</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2989}>
                <Text style={styles.Text_I10015_3038_0_2989}>JKL</Text>
              </View>
            </View>
            <View style={styles.View_I10015_3038_0_2993}>
              <View style={styles.View_I10015_3038_0_2991}>
                <Text style={styles.Text_I10015_3038_0_2991}>5</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2992}>
                <Text style={styles.Text_I10015_3038_0_2992}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_3002}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_2995}
            />
            <View style={styles.View_I10015_3038_0_2998}>
              <View style={styles.View_I10015_3038_0_2996}>
                <Text style={styles.Text_I10015_3038_0_2996}>GHI</Text>
              </View>
              <View style={styles.View_I10015_3038_0_2997}>
                <Text style={styles.Text_I10015_3038_0_2997}>GHI</Text>
              </View>
            </View>
            <View style={styles.View_I10015_3038_0_3001}>
              <View style={styles.View_I10015_3038_0_2999}>
                <Text style={styles.Text_I10015_3038_0_2999}>4</Text>
              </View>
              <View style={styles.View_I10015_3038_0_3000}>
                <Text style={styles.Text_I10015_3038_0_3000}>4</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_3010}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_3003}
            />
            <View style={styles.View_I10015_3038_0_3006}>
              <View style={styles.View_I10015_3038_0_3004}>
                <Text style={styles.Text_I10015_3038_0_3004}>DEF</Text>
              </View>
              <View style={styles.View_I10015_3038_0_3005}>
                <Text style={styles.Text_I10015_3038_0_3005}>DEF</Text>
              </View>
            </View>
            <View style={styles.View_I10015_3038_0_3009}>
              <View style={styles.View_I10015_3038_0_3007}>
                <Text style={styles.Text_I10015_3038_0_3007}>3</Text>
              </View>
              <View style={styles.View_I10015_3038_0_3008}>
                <Text style={styles.Text_I10015_3038_0_3008}>3</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_3018}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_3011}
            />
            <View style={styles.View_I10015_3038_0_3014}>
              <View style={styles.View_I10015_3038_0_3012}>
                <Text style={styles.Text_I10015_3038_0_3012}>ABC</Text>
              </View>
              <View style={styles.View_I10015_3038_0_3013}>
                <Text style={styles.Text_I10015_3038_0_3013}>ABC</Text>
              </View>
            </View>
            <View style={styles.View_I10015_3038_0_3017}>
              <View style={styles.View_I10015_3038_0_3015}>
                <Text style={styles.Text_I10015_3038_0_3015}>2</Text>
              </View>
              <View style={styles.View_I10015_3038_0_3016}>
                <Text style={styles.Text_I10015_3038_0_3016}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_3038_0_3026}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_3038_0_3019}
            />
            <View style={styles.View_I10015_3038_0_3022}>
              <View style={styles.View_I10015_3038_0_3020}>
                <Text style={styles.Text_I10015_3038_0_3020}> </Text>
              </View>
              <View style={styles.View_I10015_3038_0_3021}>
                <Text style={styles.Text_I10015_3038_0_3021}> </Text>
              </View>
            </View>
            <View style={styles.View_I10015_3038_0_3025}>
              <View style={styles.View_I10015_3038_0_3023}>
                <Text style={styles.Text_I10015_3038_0_3023}>1</Text>
              </View>
              <View style={styles.View_I10015_3038_0_3024}>
                <Text style={styles.Text_I10015_3038_0_3024}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I10015_3038_0_3040}>
          <View style={styles.View_I10015_3038_0_3039}>
            <View style={styles.View_I10015_3038_0_3038}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5a52896-9bf1-4326-97c8-b7798529df36"
                }}
                style={styles.ImageBackground_I10015_3038_0_3028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b163abc5-6691-47c4-8673-24f1a5f78f05"
                }}
                style={styles.ImageBackground_I10015_3038_0_3029}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebd968c1-8ef0-499d-93b3-0c9bbb07e827"
                }}
                style={styles.ImageBackground_I10015_3038_0_3030}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be1cbd8c-7460-4fa0-b987-17fb02d027de"
                }}
                style={styles.ImageBackground_I10015_3038_0_3031}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dcdabad-3319-454c-9d3e-2681569c4295"
                }}
                style={styles.ImageBackground_I10015_3038_0_3032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/491ed139-e8fa-4822-914a-d3e2da4e74c4"
                }}
                style={styles.ImageBackground_I10015_3038_0_3033}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c4b685a-86cc-41ea-84a1-27cb074fb81f"
                }}
                style={styles.ImageBackground_I10015_3038_0_3034}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e022940-47f4-4fff-8b8c-6220f90a2c6e"
                }}
                style={styles.ImageBackground_I10015_3038_0_3035}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fc72acb-74fa-4032-a14a-7001dc43a4e2"
                }}
                style={styles.ImageBackground_I10015_3038_0_3036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4446377-885d-4f84-9113-1deac9eaa01c"
                }}
                style={styles.ImageBackground_I10015_3038_0_3037}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32b5844c-387e-42c2-acd7-5129e2bfe0f3"
        }}
        style={styles.ImageBackground_10015_3039}
      />
      <View style={styles.View_10015_3056}>
        <View style={styles.View_10015_3057}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dd03d31-e61f-4fe5-b4c1-3dcf972c9e71"
            }}
            style={styles.ImageBackground_10015_3058}
          />
          <View style={styles.View_10015_3059}>
            <Text style={styles.Text_10015_3059}>
              Profile Settings SafeTBoxes Help
            </Text>
          </View>
          <View style={styles.View_10015_3060}>
            <Text style={styles.Text_10015_3060}>Log out</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b152acc-2fa0-4264-98bc-f0172a02422c"
            }}
            style={styles.ImageBackground_10015_3061}
          />
        </View>
      </View>
      <View style={styles.View_0_1622}>
        <View style={styles.View_0_1685}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12d5595d-4213-48b8-bdf1-9e97c503036e"
            }}
            style={styles.ImageBackground_0_1683}
          />
          <View style={styles.View_0_1684}>
            <Text style={styles.Text_0_1684}>Files</Text>
          </View>
        </View>
        <View style={styles.View_0_1688}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d8ef5a6-ef97-4474-8075-53619de29d4a"
            }}
            style={styles.ImageBackground_0_1686}
          />
          <View style={styles.View_0_1687}>
            <Text style={styles.Text_0_1687}>View All</Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_0_1689} />
        <View source={{ uri: "null" }} style={styles.View_0_1690} />
        <View source={{ uri: "null" }} style={styles.View_0_1691} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b374f49-039d-4941-b2ec-2449f7c8e468"
          }}
          style={styles.ImageBackground_0_1692}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dbd3258-9997-4ac1-b941-17e8581b2e7e"
          }}
          style={styles.ImageBackground_0_1693}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3fa9edf-bb55-46e9-b9b6-d7469d9b7355"
          }}
          style={styles.ImageBackground_0_1694}
        />
        <View style={styles.View_0_1697}>
          <View style={styles.View_0_1695}>
            <Text style={styles.Text_0_1695}>Early morning thoughts</Text>
          </View>
          <View style={styles.View_0_1696}>
            <Text style={styles.Text_0_1696}>Early morning thoughts</Text>
          </View>
        </View>
        <View style={styles.View_0_1700}>
          <View style={styles.View_0_1698}>
            <Text style={styles.Text_0_1698}>Design Critique Document</Text>
          </View>
          <View style={styles.View_0_1699}>
            <Text style={styles.Text_0_1699}>Design Critique Document</Text>
          </View>
        </View>
        <View style={styles.View_0_1703}>
          <View style={styles.View_0_1701}>
            <Text style={styles.Text_0_1701}>Simone Marten 1:1 Notes</Text>
          </View>
          <View style={styles.View_0_1702}>
            <Text style={styles.Text_0_1702}>Simone Marten 1:1 Notes</Text>
          </View>
        </View>
        <View style={styles.View_0_1704}>
          <Text style={styles.Text_0_1704}>Today</Text>
        </View>
        <View style={styles.View_0_1705}>
          <Text style={styles.Text_0_1705}>Today</Text>
        </View>
        <View style={styles.View_0_1706}>
          <Text style={styles.Text_0_1706}>Recently Updated</Text>
        </View>
        <View style={styles.View_0_1709}>
          <View style={styles.View_0_1707}>
            <Text style={styles.Text_0_1707}>
              # Profile Editor ## All Fields - Full name - Title - City -
              Country - Profile Link - Bio - Links - Portfolio - Twitter -
              Instagram - Behance - Other? - Highlight - Design Heroes -
              Childhood Hobbies - Currently Listening To - Photos (Wide
              Carousel) - Q&amp;A - Logo/Signature ## Objective We want to
              expose the designer profile editor to designers so they can write
              their own information. For each of the sections, add a description
              of how we want them to write the content and / or suggestions. For
              photos, tell designers how to crop / edit them and upload as well
              as maximum size. Allow our team to approve profile before they go
              live.
            </Text>
          </View>
          <View style={styles.View_0_1708}>
            <Text style={styles.Text_0_1708}>
              # Profile Editor ## All Fields - Full name - Title - City -
              Country - Profile Link - Bio - Links - Portfolio - Twitter -
              Instagram - Behance - Other? - Highlight - Design Heroes -
              Childhood Hobbies - Currently Listening To - Photos (Wide
              Carousel) - Q&amp;A - Logo/Signature ## Objective We want to
              expose the designer profile editor to designers so they can write
              their own information. For each of the sections, add a description
              of how we want them to write the content and / or suggestions. For
              photos, tell designers how to crop / edit them and upload as well
              as maximum size. Allow our team to approve profile before they go
              live.
            </Text>
          </View>
        </View>
        <View style={styles.View_0_1712}>
          <View style={styles.View_0_1710}>
            <Text style={styles.Text_0_1710}>
              # Transparent UI Kit ### Access through a letter (Scan and go)
              Accessing data using a code contained in a physical letter. For
              example accessing energy usage data from a monthly bill. ###
              Activity log (My log) A person can see a chronological record of
              data access. These records can contain an action taken, time and
              date or the IP address of the device accessing the data. Check out
              facebook activity log
              (https://www.facebook.com/keremsuer/allactivity) ### Behavioral
              patterns (Behavior detection) Access is controlled based on
              someone’s past activity. Unusual behaviour could cause further
              checks or block access to data. Software could make it easier to
              access data that is frequently requested. ### Delegate permissions
              ( ) A person gives someone else, or third-party software, the
              authority to act on their behalf. ### Emergency contacts (My
              A-list) A person can nominate other people they trust to have
              access to data in an emergency, for example, if they are unable to
              access it themselves. Sometimes a delay is used, giving time for
              an emergency access request to be stopped. Maybe add their finger
              print as one of the table rows?
            </Text>
          </View>
          <View style={styles.View_0_1711}>
            <Text style={styles.Text_0_1711}>
              # Transparent UI Kit ### Access through a letter (Scan and go)
              Accessing data using a code contained in a physical letter. For
              example accessing energy usage data from a monthly bill. ###
              Activity log (My log) A person can see a chronological record of
              data access. These records can contain an action taken, time and
              date or the IP address of the device accessing the data. Check out
              facebook activity log
              (https://www.facebook.com/keremsuer/allactivity) ### Behavioral
              patterns (Behavior detection) Access is controlled based on
              someone’s past activity. Unusual behaviour could cause further
              checks or block access to data. Software could make it easier to
              access data that is frequently requested. ### Delegate permissions
              ( ) A person gives someone else, or third-party software, the
              authority to act on their behalf. ### Emergency contacts (My
              A-list) A person can nominate other people they trust to have
              access to data in an emergency, for example, if they are unable to
              access it themselves. Sometimes a delay is used, giving time for
              an emergency access request to be stopped. Maybe add their finger
              print as one of the table rows?
            </Text>
          </View>
        </View>
        <View style={styles.View_0_1715}>
          <View style={styles.View_0_1713}>
            <Text style={styles.Text_0_1713}>
              ### End-to-end encryption Someone encrypts data so it can only be
              decrypted by the intended person. This often uses public key
              cryptography. ### Future decision notice Being told about an
              upcoming automated decision, allowing someone plenty of time to
              review, adjust or cancel that action. Decisions might include
              automatically saving money or switching between mobile networks.
              ### Gesture matching When requesting access to data, someone
              physically makes a gesture or pattern which is matched against an
              expected pattern. ### Inactivity checking Data is shared if a
              secondary activity is stopped. ### Just-in-time consent A person
              is asked to agree to a specific permission at the point that a
              service needs it to complete a task. ### Key ceremony Data access
              is allowed when a set group of people agree to it. Secure file
              sharing between groups (agreement model)
            </Text>
          </View>
          <View style={styles.View_0_1714}>
            <Text style={styles.Text_0_1714}>
              ### End-to-end encryption Someone encrypts data so it can only be
              decrypted by the intended person. This often uses public key
              cryptography. ### Future decision notice Being told about an
              upcoming automated decision, allowing someone plenty of time to
              review, adjust or cancel that action. Decisions might include
              automatically saving money or switching between mobile networks.
              ### Gesture matching When requesting access to data, someone
              physically makes a gesture or pattern which is matched against an
              expected pattern. ### Inactivity checking Data is shared if a
              secondary activity is stopped. ### Just-in-time consent A person
              is asked to agree to a specific permission at the point that a
              service needs it to complete a task. ### Key ceremony Data access
              is allowed when a set group of people agree to it. Secure file
              sharing between groups (agreement model)
            </Text>
          </View>
        </View>
        <View style={styles.View_0_1716}>
          <Text style={styles.Text_0_1716}>Name</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bb6f1ea-402a-4a3c-a683-d3940c963d05"
          }}
          style={styles.ImageBackground_0_1719}
        />
        <View style={styles.View_0_1742}>
          <View style={styles.View_0_1720}>
            <Text style={styles.Text_0_1720}>
              Lorem Ipsum Dolor Narwhal.midi
            </Text>
          </View>
          <View style={styles.View_0_1721}>
            <Text style={styles.Text_0_1721}>
              Music file, 3 min long Mar 13, 2018
            </Text>
          </View>
          <View style={styles.View_0_1725}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81cd4f39-8dc7-4f88-85bc-4c8ffdf54aba"
              }}
              style={styles.ImageBackground_0_1722}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b758b8b-42d9-401b-a214-596eaf3d299e"
              }}
              style={styles.ImageBackground_0_1723}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0ab8b4b-e569-41cd-9182-b3ebc405e806"
              }}
              style={styles.ImageBackground_0_1724}
            />
          </View>
          <View style={styles.View_0_1741}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cbce93d-3a97-4f83-8f1c-43285ec04e07"
              }}
              style={styles.ImageBackground_0_1726}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/227bc29a-ee2f-405a-af27-158b4207b1f2"
              }}
              style={styles.ImageBackground_0_1740}
            />
          </View>
        </View>
        <View style={styles.View_0_1767}>
          <View style={styles.View_0_1743}>
            <Text style={styles.Text_0_1743}>
              Lorem Ipsum Spreadsheet 18.xls
            </Text>
          </View>
          <View style={styles.View_0_1744}>
            <Text style={styles.Text_0_1744}>
              Spreadsheet, small file Mar 13, 2018
            </Text>
          </View>
          <View style={styles.View_0_1748}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/789378c8-b726-4db9-800f-8d72308c276f"
              }}
              style={styles.ImageBackground_0_1745}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21a0c85d-ca4f-4ea0-bc04-b9ccf2c11382"
              }}
              style={styles.ImageBackground_0_1746}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c07ce0a4-0aa3-4c80-9670-731730ad6553"
              }}
              style={styles.ImageBackground_0_1747}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8da24fe9-259b-486c-9fed-f13597fa8f0c"
            }}
            style={styles.ImageBackground_0_1754}
          />
          <View style={styles.View_0_1766}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f653cdfa-d5fa-4d72-b1d7-836e1b980217"
              }}
              style={styles.ImageBackground_0_1755}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbfc2c5e-0e65-4544-badc-900900ab6636"
              }}
              style={styles.ImageBackground_0_1765}
            />
          </View>
        </View>
        <View style={styles.View_0_1775}>
          <View style={styles.View_0_1768}>
            <Text style={styles.Text_0_1768}>Lorem Ipsum Doc.pdf</Text>
          </View>
          <View style={styles.View_0_1769}>
            <Text style={styles.Text_0_1769}>
              Document, small file Mar 13, 2018
            </Text>
          </View>
          <View style={styles.View_0_1773}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e525fc37-3a45-48d4-bc53-f734b0b314ae"
              }}
              style={styles.ImageBackground_0_1770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b183550a-130b-4465-ad66-fb289972e041"
              }}
              style={styles.ImageBackground_0_1771}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42d42eb3-7382-4d23-96d9-6441967199b1"
              }}
              style={styles.ImageBackground_0_1772}
            />
          </View>
          <View style={styles.View_0_1774}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f59aa27-d79f-4c8d-96cf-2d01cb8d1dbb"
              }}
              style={styles.ImageBackground_I0_1774_0_3105}
            />
            <View style={styles.View_I0_1774_0_3106}>
              <Text style={styles.Text_I0_1774_0_3106}>Aa</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_1803}>
          <View source={{ uri: "null" }} style={styles.View_0_1776} />
          <View style={styles.View_0_1777}>
            <View source={{ uri: "null" }} style={styles.View_I0_1777_0_3062} />
            <View style={styles.View_I0_1777_0_3082}>
              <View style={styles.View_I0_1777_0_3076}>
                <View style={styles.View_I0_1777_0_3067}>
                  <View
                    source={{ uri: "null" }}
                    style={styles.View_I0_1777_0_3063}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdc58a39-c81b-4e29-87fc-70a8db8552cc"
                    }}
                    style={styles.ImageBackground_I0_1777_0_3066}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69539366-7d01-4720-a2c3-3e6c92dcedf6"
                    }}
                    style={styles.ImageBackground_I0_1777_0_3065}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ef45a06-7b4e-4e81-a11d-5c4afee67654"
                  }}
                  style={styles.ImageBackground_I0_1777_0_3071}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa0eb945-ed18-41d7-94c0-77847a92d3bf"
                  }}
                  style={styles.ImageBackground_I0_1777_0_3075}
                />
              </View>
              <View style={styles.View_I0_1777_0_3077}>
                <Text style={styles.Text_I0_1777_0_3077}>100%</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c082699d-dbb4-46fa-aea5-8f7727615e2a"
                }}
                style={styles.ImageBackground_I0_1777_0_3081}
              />
            </View>
            <View style={styles.View_I0_1777_0_3083}>
              <Text style={styles.Text_I0_1777_0_3083}>4:19 AM</Text>
            </View>
            <View style={styles.View_I0_1777_0_3093}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8d6eb4c-2afb-401b-97da-62ed20524af4"
                }}
                style={styles.ImageBackground_I0_1777_0_3088}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/586f9bb3-adad-4eba-a7c1-318f0f14a347"
                }}
                style={styles.ImageBackground_I0_1777_0_3092}
              />
            </View>
          </View>
          <View style={styles.View_0_1802}>
            <View style={styles.View_0_1779}>
              <Text style={styles.Text_0_1779}>Client Meeting Notes</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_0_1786}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("0_842"))
              }
            >
              <View source={{ uri: "null" }} style={styles.View_0_1780} />
              <View style={styles.View_0_1785}>
                <View source={{ uri: "null" }} style={styles.View_0_1781} />
                <View style={styles.View_0_1784}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8167ee51-56f5-449c-90fe-3555c21ff134"
                    }}
                    style={styles.ImageBackground_0_1783}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.View_0_1801}>
              <View style={styles.View_0_1796}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2962b01-ad47-4168-92c1-2a4e6da9784c"
                  }}
                  style={styles.ImageBackground_0_1790}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cc24492-73a0-4e68-bf98-9fbd15024c27"
                  }}
                  style={styles.ImageBackground_0_1793}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11b102e3-3550-4fd3-a049-b8b173e0a0ee"
                  }}
                  style={styles.ImageBackground_0_1794}
                />
                <View style={styles.View_0_1795}>
                  <Text style={styles.Text_0_1795}>38</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91823e41-68ed-4cf0-a827-1466a0a2d2c2"
                }}
                style={styles.ImageBackground_0_1799}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f06632e4-9389-45a6-826a-2436a54cd1b0"
                }}
                style={styles.ImageBackground_0_1800}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1832}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9635695c-93d6-4181-bafd-3624645c17f9"
            }}
            style={styles.ImageBackground_0_1804}
          />
          <View style={styles.View_0_1805}>
            <View source={{ uri: "null" }} style={styles.View_I0_1805_0_3062} />
            <View style={styles.View_I0_1805_0_3082}>
              <View style={styles.View_I0_1805_0_3076}>
                <View style={styles.View_I0_1805_0_3067}>
                  <View
                    source={{ uri: "null" }}
                    style={styles.View_I0_1805_0_3063}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2cab683-af7e-4cbf-8967-f8024691bf4e"
                    }}
                    style={styles.ImageBackground_I0_1805_0_3066}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4caa78d3-7997-43e0-b7d8-3166413a1ce9"
                    }}
                    style={styles.ImageBackground_I0_1805_0_3065}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afc0fa01-83d2-42f3-9f12-08da3e57f822"
                  }}
                  style={styles.ImageBackground_I0_1805_0_3071}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e69a616-6f2d-4a2d-a591-2abf2acf10ab"
                  }}
                  style={styles.ImageBackground_I0_1805_0_3075}
                />
              </View>
              <View style={styles.View_I0_1805_0_3077}>
                <Text style={styles.Text_I0_1805_0_3077}>100%</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79677d4c-5e58-4b23-9718-107e44a5f25b"
                }}
                style={styles.ImageBackground_I0_1805_0_3081}
              />
            </View>
            <View style={styles.View_I0_1805_0_3083}>
              <Text style={styles.Text_I0_1805_0_3083}>4:19 AM</Text>
            </View>
            <View style={styles.View_I0_1805_0_3093}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c65ce95-5a45-4b66-8365-251761fb3c82"
                }}
                style={styles.ImageBackground_I0_1805_0_3088}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff39095e-95ab-4dd4-8ddb-3a0db32ad99b"
                }}
                style={styles.ImageBackground_I0_1805_0_3092}
              />
            </View>
          </View>
          <View style={styles.View_0_1818}>
            <View style={styles.View_0_1807}>
              <Text style={styles.Text_0_1807}>Certificates</Text>
            </View>
            <View style={styles.View_0_1817}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5468e32-0328-4cad-8b51-47ed9a58d0a5"
                }}
                style={styles.ImageBackground_I0_1817_0_2802}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f4a5d60-6a66-47c1-8c87-d0a3006d85ca"
                }}
                style={styles.ImageBackground_I0_1817_0_2803}
              />
              <View style={styles.View_I0_1817_0_2810}>
                <View style={styles.View_I0_1817_0_2806}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89918259-a7f6-4918-abfd-caf641d75eeb"
                    }}
                    style={styles.ImageBackground_I0_1817_0_2804}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22287068-b7a8-4dba-a327-7f1cc9559879"
                    }}
                    style={styles.ImageBackground_I0_1817_0_2805}
                  />
                </View>
                <View style={styles.View_I0_1817_0_2809}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7298e697-c8a6-495b-b12f-2562d223b459"
                    }}
                    style={styles.ImageBackground_I0_1817_0_2807}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc9703b1-1465-429b-9533-1062621709f9"
                    }}
                    style={styles.ImageBackground_I0_1817_0_2808}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_1827}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bea2e76-9ac2-47cd-902d-c4531bf4fc8e"
              }}
              style={styles.ImageBackground_0_1821}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f029a529-4733-4343-9767-fb3fbcf34b5e"
              }}
              style={styles.ImageBackground_0_1824}
            />
          </View>
          <View style={styles.View_0_1828}>
            <Text style={styles.Text_0_1828}>Add People</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcc5a413-c0cd-4ebe-a8a6-c33ea4c66e2f"
            }}
            style={styles.ImageBackground_0_1829}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/440acb9c-1660-4c60-94ce-d0788b7e0ddd"
            }}
            style={styles.ImageBackground_0_1830}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/811213a1-0044-49d0-957c-36b95c5ad887"
            }}
            style={styles.ImageBackground_0_1831}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("175%") },
  ImageBackground_10015_3035: {
    width: wp("100%"),
    height: hp("175%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10015_3036: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3036_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3036_0_3082: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3036_0_3076: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3036_0_3067: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3036_0_3063: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10015_3036_0_3066: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10015_3036_0_3065: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10015_3036_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I10015_3036_0_3075: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10015_3036_0_3077: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3036_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10015_3036_0_3081: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10015_3036_0_3083: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3036_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3036_0_3093: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10015_3036_0_3088: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10015_3036_0_3092: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10015_3037: {
    width: wp("75%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_10015_3037: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10015_3038: {
    width: wp("100%"),
    height: hp("57%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10015_3038_0_2939: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2944: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10015_3038_0_2943: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10015_3038_0_2952: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2945: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2948: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2946: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2946: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2947: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2947: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2951: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2949: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2949: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2950: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2950: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2957: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2953: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2956: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2954: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2954: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2955: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3027: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2965: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2958: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2961: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2959: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10015_3038_0_2960: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2964: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2962: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2962: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2963: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2963: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2970: {
    width: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2966: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2969: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2967: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2967: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2968: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2968: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2978: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2971: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2974: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2972: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2972: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2973: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2973: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2977: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2975: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2975: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2976: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2976: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2986: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2979: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2982: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2980: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2980: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2981: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2981: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2985: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2983: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2983: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2984: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2994: {
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2987: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2990: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2988: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2988: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2989: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2989: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2993: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2991: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2991: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2992: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2992: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3002: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2995: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_2998: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2996: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2996: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_2997: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2997: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3001: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_2999: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_2999: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3000: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3000: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3010: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3003: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_3006: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3004: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3004: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3005: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3005: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3009: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3007: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3007: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3008: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3008: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3018: {
    width: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3011: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_3014: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3012: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3012: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3013: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3013: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3017: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3015: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3015: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3016: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3016: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3026: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3019: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_3038_0_3022: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3020: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3020: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3021: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3021: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3025: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3023: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3023: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3024: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_3038_0_3024: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_3038_0_3040: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3039: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_3038_0_3038: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10015_3038_0_3028: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I10015_3038_0_3029: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I10015_3038_0_3030: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I10015_3038_0_3031: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10015_3038_0_3032: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I10015_3038_0_3033: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_I10015_3038_0_3034: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I10015_3038_0_3035: {
    width: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I10015_3038_0_3036: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I10015_3038_0_3037: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_10015_3039: {
    width: wp("61%"),
    height: hp("46%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    resizeMode: "cover"
  },
  View_10015_3056: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_10015_3057: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10015_3058: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10015_3059: {
    width: wp("15%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10015_3059: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10015_3060: {
    width: wp("10%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10015_3060: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10015_3061: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_1622: {
    width: wp("50%"),
    height: hp("181%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    backgroundColor: "rgba(244, 242, 240, 1)",
    overflow: "hidden"
  },
  View_0_1685: {
    width: wp("22%"),
    height: hp("4%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12%")
  },
  ImageBackground_0_1683: {
    width: wp("22%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1684: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_0_1684: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1688: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_0_1686: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1687: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1687: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1689: {
    width: wp("15%"),
    height: hp("18%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1690: {
    width: wp("15%"),
    height: hp("18%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_0_1691: {
    width: wp("15%"),
    height: hp("18%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_0_1692: {
    width: wp("18%"),
    height: hp("24%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1693: {
    width: wp("18%"),
    height: hp("24%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_0_1694: {
    width: wp("18%"),
    height: hp("24%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_0_1697: {
    width: wp("18%"),
    height: hp("5%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1695: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1695: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1696: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1696: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1700: {
    width: wp("18%"),
    height: hp("5%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_0_1698: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1698: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1699: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1699: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1703: {
    width: wp("18%"),
    height: hp("5%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_0_1701: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1701: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1702: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1702: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1704: {
    width: wp("4%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_0_1704: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1705: {
    width: wp("4%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_0_1705: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1706: {
    width: wp("20%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1706: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1709: {
    width: wp("13%"),
    height: hp("20%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_1707: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1707: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 2,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1708: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1708: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 2,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1712: {
    width: wp("13%"),
    height: hp("20%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_0_1710: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1710: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 2,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1711: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1711: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 2,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1715: {
    width: wp("13%"),
    height: hp("20%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_0_1713: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1713: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 2,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1714: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1714: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 2,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1716: {
    width: wp("5%"),
    top: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_0_1716: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1719: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_0_1742: {
    width: wp("44%"),
    height: hp("7%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1720: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_1720: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1721: {
    width: wp("15%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_1721: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1725: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_0_1722: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1723: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1724: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1741: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1726: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1740: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1767: {
    width: wp("44%"),
    height: hp("8%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1743: {
    width: wp("32%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_1743: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1744: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_1744: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1748: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_0_1745: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1746: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1747: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1754: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_1766: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1755: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1765: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_1775: {
    width: wp("44%"),
    height: hp("7%"),
    top: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1768: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_1768: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1769: {
    width: wp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_1769: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1773: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_0_1770: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1771: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1772: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1774: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1774_0_3105: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1774_0_3106: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_1774_0_3106: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1803: {
    width: wp("50%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1776: {
    width: wp("50%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1777: {
    width: wp("50%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1777_0_3062: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1777_0_3082: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1777_0_3076: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1777_0_3067: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1777_0_3063: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1777_0_3066: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1777_0_3065: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1777_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I0_1777_0_3075: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_1777_0_3077: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1777_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1777_0_3081: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_1777_0_3083: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_1777_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1777_0_3093: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1777_0_3088: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1777_0_3092: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1802: {
    width: wp("38%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1779: {
    width: wp("25%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_0_1779: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_1786: {
    width: wp("24%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1780: {
    width: wp("24%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1785: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_1781: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1784: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1783: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1801: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_0_1796: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1790: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1793: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1794: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_0_1795: {
    width: wp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_1795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1799: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_0_1800: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_0_1832: {
    width: wp("50%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1804: {
    width: wp("50%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1805: {
    width: wp("50%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1805_0_3062: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1805_0_3082: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1805_0_3076: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1805_0_3067: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1805_0_3063: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1805_0_3066: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1805_0_3065: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1805_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I0_1805_0_3075: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_1805_0_3077: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1805_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1805_0_3081: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_1805_0_3083: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_1805_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1805_0_3093: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1805_0_3088: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1805_0_3092: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1818: {
    width: wp("19%"),
    height: hp("12%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1807: {
    width: wp("19%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1807: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1817: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1817_0_2802: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1817_0_2803: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I0_1817_0_2810: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1817_0_2806: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1817_0_2804: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1817_0_2805: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1817_0_2809: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1817_0_2807: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1817_0_2808: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_1827: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1821: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1824: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_1828: {
    width: wp("10%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_0_1828: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1829: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_0_1830: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_0_1831: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
