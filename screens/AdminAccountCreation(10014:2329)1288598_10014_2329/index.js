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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/baf73637-a651-47fa-a572-30fdd68ff457"
        }}
        style={styles.ImageBackground_10014_2330}
      />
      <View style={styles.View_10014_2331}>
        <View source={{ uri: "null" }} style={styles.View_I10014_2331_0_3062} />
        <View style={styles.View_I10014_2331_0_3082}>
          <View style={styles.View_I10014_2331_0_3076}>
            <View style={styles.View_I10014_2331_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I10014_2331_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bee5f4f-fe4a-4901-b653-d35a3344796c"
                }}
                style={styles.ImageBackground_I10014_2331_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab40a577-135d-4b1e-8d45-81fb26afd792"
                }}
                style={styles.ImageBackground_I10014_2331_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a14dcfbd-cf41-4f55-943d-dd47f1befcc8"
              }}
              style={styles.ImageBackground_I10014_2331_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ea3b48f-2812-4959-8fff-7d0a87b71861"
              }}
              style={styles.ImageBackground_I10014_2331_0_3075}
            />
          </View>
          <View style={styles.View_I10014_2331_0_3077}>
            <Text style={styles.Text_I10014_2331_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4df0c9b6-1233-4fd5-bd75-ba273443f163"
            }}
            style={styles.ImageBackground_I10014_2331_0_3081}
          />
        </View>
        <View style={styles.View_I10014_2331_0_3083}>
          <Text style={styles.Text_I10014_2331_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I10014_2331_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8407407-a107-41a4-8f23-b38cf402b8dc"
            }}
            style={styles.ImageBackground_I10014_2331_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f228d53-4a13-450a-8308-587f5c7de0df"
            }}
            style={styles.ImageBackground_I10014_2331_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_10014_2332}>
        <Text style={styles.Text_10014_2332}>
          Welcome. What is your phone number?
        </Text>
      </View>
      <View style={styles.View_10014_2333}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36d55598-3994-4b49-9ace-ff3e76af81fe"
          }}
          style={styles.ImageBackground_I10014_2333_0_2939}
        />
        <View style={styles.View_I10014_2333_0_2944}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b93df9da-1a9d-4daa-bfc6-5beec27443bd"
            }}
            style={styles.ImageBackground_I10014_2333_0_2943}
          />
        </View>
        <View style={styles.View_I10014_2333_0_2952}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I10014_2333_0_2945}
          />
          <View style={styles.View_I10014_2333_0_2948}>
            <View style={styles.View_I10014_2333_0_2946}>
              <Text style={styles.Text_I10014_2333_0_2946}> </Text>
            </View>
            <View style={styles.View_I10014_2333_0_2947}>
              <Text style={styles.Text_I10014_2333_0_2947}> </Text>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_2951}>
            <View style={styles.View_I10014_2333_0_2949}>
              <Text style={styles.Text_I10014_2333_0_2949}>0</Text>
            </View>
            <View style={styles.View_I10014_2333_0_2950}>
              <Text style={styles.Text_I10014_2333_0_2950}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I10014_2333_0_2957}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I10014_2333_0_2953}
          />
          <View style={styles.View_I10014_2333_0_2956}>
            <View style={styles.View_I10014_2333_0_2954}>
              <Text style={styles.Text_I10014_2333_0_2954}>PGRS</Text>
            </View>
            <View style={styles.View_I10014_2333_0_2955}>
              <Text style={styles.Text_I10014_2333_0_2955}>PGRS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I10014_2333_0_3027}>
          <View style={styles.View_I10014_2333_0_2965}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_2958}
            />
            <View style={styles.View_I10014_2333_0_2961}>
              <View style={styles.View_I10014_2333_0_2959}>
                <Text style={styles.Text_I10014_2333_0_2959}>WXYZ</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4e8becb-d55c-4856-a773-938232578b09"
                }}
                style={styles.ImageBackground_I10014_2333_0_2960}
              />
            </View>
            <View style={styles.View_I10014_2333_0_2964}>
              <View style={styles.View_I10014_2333_0_2962}>
                <Text style={styles.Text_I10014_2333_0_2962}>9</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2963}>
                <Text style={styles.Text_I10014_2333_0_2963}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_2970}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_2966}
            />
            <View style={styles.View_I10014_2333_0_2969}>
              <View style={styles.View_I10014_2333_0_2967}>
                <Text style={styles.Text_I10014_2333_0_2967}>8</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2968}>
                <Text style={styles.Text_I10014_2333_0_2968}>8</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_2978}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_2971}
            />
            <View style={styles.View_I10014_2333_0_2974}>
              <View style={styles.View_I10014_2333_0_2972}>
                <Text style={styles.Text_I10014_2333_0_2972}>PGRS</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2973}>
                <Text style={styles.Text_I10014_2333_0_2973}>PGRS</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2333_0_2977}>
              <View style={styles.View_I10014_2333_0_2975}>
                <Text style={styles.Text_I10014_2333_0_2975}>7</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2976}>
                <Text style={styles.Text_I10014_2333_0_2976}>7</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_2986}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_2979}
            />
            <View style={styles.View_I10014_2333_0_2982}>
              <View style={styles.View_I10014_2333_0_2980}>
                <Text style={styles.Text_I10014_2333_0_2980}>MNO</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2981}>
                <Text style={styles.Text_I10014_2333_0_2981}>MNO</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2333_0_2985}>
              <View style={styles.View_I10014_2333_0_2983}>
                <Text style={styles.Text_I10014_2333_0_2983}>6</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2984}>
                <Text style={styles.Text_I10014_2333_0_2984}>6</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_2994}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_2987}
            />
            <View style={styles.View_I10014_2333_0_2990}>
              <View style={styles.View_I10014_2333_0_2988}>
                <Text style={styles.Text_I10014_2333_0_2988}>JKL</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2989}>
                <Text style={styles.Text_I10014_2333_0_2989}>JKL</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2333_0_2993}>
              <View style={styles.View_I10014_2333_0_2991}>
                <Text style={styles.Text_I10014_2333_0_2991}>5</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2992}>
                <Text style={styles.Text_I10014_2333_0_2992}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_3002}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_2995}
            />
            <View style={styles.View_I10014_2333_0_2998}>
              <View style={styles.View_I10014_2333_0_2996}>
                <Text style={styles.Text_I10014_2333_0_2996}>GHI</Text>
              </View>
              <View style={styles.View_I10014_2333_0_2997}>
                <Text style={styles.Text_I10014_2333_0_2997}>GHI</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2333_0_3001}>
              <View style={styles.View_I10014_2333_0_2999}>
                <Text style={styles.Text_I10014_2333_0_2999}>4</Text>
              </View>
              <View style={styles.View_I10014_2333_0_3000}>
                <Text style={styles.Text_I10014_2333_0_3000}>4</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_3010}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_3003}
            />
            <View style={styles.View_I10014_2333_0_3006}>
              <View style={styles.View_I10014_2333_0_3004}>
                <Text style={styles.Text_I10014_2333_0_3004}>DEF</Text>
              </View>
              <View style={styles.View_I10014_2333_0_3005}>
                <Text style={styles.Text_I10014_2333_0_3005}>DEF</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2333_0_3009}>
              <View style={styles.View_I10014_2333_0_3007}>
                <Text style={styles.Text_I10014_2333_0_3007}>3</Text>
              </View>
              <View style={styles.View_I10014_2333_0_3008}>
                <Text style={styles.Text_I10014_2333_0_3008}>3</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_3018}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_3011}
            />
            <View style={styles.View_I10014_2333_0_3014}>
              <View style={styles.View_I10014_2333_0_3012}>
                <Text style={styles.Text_I10014_2333_0_3012}>ABC</Text>
              </View>
              <View style={styles.View_I10014_2333_0_3013}>
                <Text style={styles.Text_I10014_2333_0_3013}>ABC</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2333_0_3017}>
              <View style={styles.View_I10014_2333_0_3015}>
                <Text style={styles.Text_I10014_2333_0_3015}>2</Text>
              </View>
              <View style={styles.View_I10014_2333_0_3016}>
                <Text style={styles.Text_I10014_2333_0_3016}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2333_0_3026}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2333_0_3019}
            />
            <View style={styles.View_I10014_2333_0_3022}>
              <View style={styles.View_I10014_2333_0_3020}>
                <Text style={styles.Text_I10014_2333_0_3020}> </Text>
              </View>
              <View style={styles.View_I10014_2333_0_3021}>
                <Text style={styles.Text_I10014_2333_0_3021}> </Text>
              </View>
            </View>
            <View style={styles.View_I10014_2333_0_3025}>
              <View style={styles.View_I10014_2333_0_3023}>
                <Text style={styles.Text_I10014_2333_0_3023}>1</Text>
              </View>
              <View style={styles.View_I10014_2333_0_3024}>
                <Text style={styles.Text_I10014_2333_0_3024}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I10014_2333_0_3040}>
          <View style={styles.View_I10014_2333_0_3039}>
            <View style={styles.View_I10014_2333_0_3038}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dc5130a-dbc1-4940-9e35-79532312686b"
                }}
                style={styles.ImageBackground_I10014_2333_0_3028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b53b4248-545f-4e74-bd28-a2b8e3610aa1"
                }}
                style={styles.ImageBackground_I10014_2333_0_3029}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6391c32d-e9e1-4d9d-a889-94132ee1ed93"
                }}
                style={styles.ImageBackground_I10014_2333_0_3030}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3871c2c4-5683-4b61-b13f-cc1a3a941020"
                }}
                style={styles.ImageBackground_I10014_2333_0_3031}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aab7cb8e-0e71-4167-b427-ab727f5db399"
                }}
                style={styles.ImageBackground_I10014_2333_0_3032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a411ec3f-b482-49cb-9a09-6085a9d88604"
                }}
                style={styles.ImageBackground_I10014_2333_0_3033}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5a73d62-ddd4-464d-9e46-1c880b4f606d"
                }}
                style={styles.ImageBackground_I10014_2333_0_3034}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/068c642b-f89a-4d5d-bbdd-5eeb76709e75"
                }}
                style={styles.ImageBackground_I10014_2333_0_3035}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81142507-eaca-4d53-8bd2-325df13ad418"
                }}
                style={styles.ImageBackground_I10014_2333_0_3036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdd76fd0-6ce7-40c5-81bb-10d1fb8c6271"
                }}
                style={styles.ImageBackground_I10014_2333_0_3037}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb2d504e-daf0-4039-9dfb-07b085c833c0"
        }}
        style={styles.ImageBackground_10014_2334}
      />
      <View style={styles.View_10014_2335}>
        <View style={styles.View_10014_2336}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6ca0deb-8274-42d5-8b7b-9af1715202ee"
            }}
            style={styles.ImageBackground_10014_2337}
          />
          <View style={styles.View_10014_2338}>
            <Text style={styles.Text_10014_2338}>
              Profile Settings SafeTBoxes Help
            </Text>
          </View>
          <View style={styles.View_10014_2339}>
            <Text style={styles.Text_10014_2339}>Log out</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdb7bf7c-a4a4-4e27-ba99-bd58c7cbe2a3"
            }}
            style={styles.ImageBackground_10014_2340}
          />
        </View>
      </View>
      <View style={styles.View_10014_2344}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07bd352b-29f5-40ff-b420-54121676727b"
          }}
          style={styles.ImageBackground_10014_2345}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_10014_2347}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_945"))
          }
        >
          <View style={styles.View_10014_2348}>
            <Text style={styles.Text_10014_2348}>Administrator Email</Text>
          </View>
          <View style={styles.View_10014_2349}>
            <Text style={styles.Text_10014_2349}>Email address</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/716dfd2f-369a-4d18-b534-10782b9a663b"
            }}
            style={styles.ImageBackground_10014_2350}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10014_2351}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_945"))
          }
        >
          <View style={styles.View_10014_2352}>
            <Text style={styles.Text_10014_2352}>Vault Name</Text>
          </View>
          <View style={styles.View_10014_2353}>
            <Text style={styles.Text_10014_2353}>Company Name</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bee89e3-fcc2-4225-9f76-6f43548b65bc"
            }}
            style={styles.ImageBackground_10014_2354}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10014_2355}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_945"))
          }
        >
          <View style={styles.View_10014_2356}>
            <Text style={styles.Text_10014_2356}>Password</Text>
          </View>
          <View style={styles.View_10014_2357}>
            <Text style={styles.Text_10014_2357}>Password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed828593-7f7d-4c36-95ef-9a5e9148007d"
            }}
            style={styles.ImageBackground_10014_2358}
          />
        </TouchableOpacity>
        <View style={styles.View_10014_2359}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5445b18-f356-4f81-bcea-6c845b70fb7c"
            }}
            style={styles.ImageBackground_I10014_2359_0_2768}
          />
          <View style={styles.View_I10014_2359_0_2769}>
            <Text style={styles.Text_I10014_2359_0_2769}>Create Vault</Text>
          </View>
          <View style={styles.View_I10014_2359_0_2772}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab81a84b-194b-42de-9be1-ad07b4db2f59"
              }}
              style={styles.ImageBackground_I10014_2359_0_2770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b824ad7-2f6a-4e61-a3c2-6dd2a47af7cf"
              }}
              style={styles.ImageBackground_I10014_2359_0_2771}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_10015_2669}>
        <Text style={styles.Text_10015_2669}>Create SafeTBox</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("175%") },
  ImageBackground_10014_2330: {
    width: wp("100%"),
    height: hp("175%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10014_2331: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2331_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2331_0_3082: {
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
  View_I10014_2331_0_3076: {
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
  View_I10014_2331_0_3067: {
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
  View_I10014_2331_0_3063: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10014_2331_0_3066: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10014_2331_0_3065: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10014_2331_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I10014_2331_0_3075: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10014_2331_0_3077: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2331_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10014_2331_0_3081: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10014_2331_0_3083: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2331_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2331_0_3093: {
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
  ImageBackground_I10014_2331_0_3088: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10014_2331_0_3092: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10014_2332: {
    width: wp("75%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_10014_2332: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2333: {
    width: wp("100%"),
    height: hp("57%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2333_0_2939: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2944: {
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
  ImageBackground_I10014_2333_0_2943: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10014_2333_0_2952: {
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
  View_I10014_2333_0_2945: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2948: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2946: {
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
  Text_I10014_2333_0_2946: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2947: {
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
  Text_I10014_2333_0_2947: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2951: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2949: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2949: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2950: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2950: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2957: {
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
  View_I10014_2333_0_2953: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2956: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2954: {
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
  Text_I10014_2333_0_2954: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2955: {
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
  Text_I10014_2333_0_2955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3027: {
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
  View_I10014_2333_0_2965: {
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
  View_I10014_2333_0_2958: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2961: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2959: {
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
  Text_I10014_2333_0_2959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10014_2333_0_2960: {
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
  View_I10014_2333_0_2964: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2962: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2962: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2963: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2963: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2970: {
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
  View_I10014_2333_0_2966: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2969: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2967: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2967: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2968: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2968: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2978: {
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
  View_I10014_2333_0_2971: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2974: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2972: {
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
  Text_I10014_2333_0_2972: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2973: {
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
  Text_I10014_2333_0_2973: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2977: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2975: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2975: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2976: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2976: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2986: {
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
  View_I10014_2333_0_2979: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2982: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2980: {
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
  Text_I10014_2333_0_2980: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2981: {
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
  Text_I10014_2333_0_2981: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2985: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2983: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2983: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2984: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2994: {
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2987: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2990: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2988: {
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
  Text_I10014_2333_0_2988: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2989: {
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
  Text_I10014_2333_0_2989: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2993: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2991: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2991: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2992: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2992: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3002: {
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
  View_I10014_2333_0_2995: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_2998: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2996: {
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
  Text_I10014_2333_0_2996: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_2997: {
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
  Text_I10014_2333_0_2997: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3001: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_2999: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_2999: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3000: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_3000: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3010: {
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
  View_I10014_2333_0_3003: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_3006: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_3004: {
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
  Text_I10014_2333_0_3004: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3005: {
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
  Text_I10014_2333_0_3005: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3009: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_3007: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_3007: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3008: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_3008: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3018: {
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
  View_I10014_2333_0_3011: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_3014: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_3012: {
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
  Text_I10014_2333_0_3012: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3013: {
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
  Text_I10014_2333_0_3013: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3017: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_3015: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_3015: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3016: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_3016: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3026: {
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
  View_I10014_2333_0_3019: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2333_0_3022: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_3020: {
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
  Text_I10014_2333_0_3020: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3021: {
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
  Text_I10014_2333_0_3021: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3025: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2333_0_3023: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_3023: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3024: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2333_0_3024: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2333_0_3040: {
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
  View_I10014_2333_0_3039: {
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
  View_I10014_2333_0_3038: {
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
  ImageBackground_I10014_2333_0_3028: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2333_0_3029: {
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
  ImageBackground_I10014_2333_0_3030: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2333_0_3031: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10014_2333_0_3032: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2333_0_3033: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_I10014_2333_0_3034: {
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
  ImageBackground_I10014_2333_0_3035: {
    width: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2333_0_3036: {
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
  ImageBackground_I10014_2333_0_3037: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_10014_2334: {
    width: wp("61%"),
    height: hp("46%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    resizeMode: "cover"
  },
  View_10014_2335: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_10014_2336: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10014_2337: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10014_2338: {
    width: wp("15%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10014_2338: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2339: {
    width: wp("10%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10014_2339: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2340: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_10014_2344: {
    width: wp("47%"),
    height: hp("53%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_10014_2345: {
    width: wp("47%"),
    height: hp("53%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10014_2347: {
    width: wp("42%"),
    height: hp("9%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10014_2348: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2348: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2349: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2349: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2350: {
    width: wp("42%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10014_2351: {
    width: wp("42%"),
    height: hp("9%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10014_2352: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2352: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2353: {
    width: wp("20%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2353: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2354: {
    width: wp("42%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10014_2355: {
    width: wp("42%"),
    height: hp("9%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10014_2356: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2356: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2357: {
    width: wp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2357: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2358: {
    width: wp("42%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10014_2359: {
    width: wp("26%"),
    height: hp("6%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2359_0_2768: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2359_0_2769: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2359_0_2769: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2359_0_2772: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2359_0_2770: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I10014_2359_0_2771: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_10015_2669: {
    width: wp("22%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    justifyContent: "flex-start"
  },
  Text_10015_2669: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
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
