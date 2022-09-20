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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b66e3add-ac5f-4e7e-8f7f-3cbe55ca12e9"
        }}
        style={styles.ImageBackground_10015_2500}
      />
      <View style={styles.View_10015_2501}>
        <View source={{ uri: "null" }} style={styles.View_I10015_2501_0_3062} />
        <View style={styles.View_I10015_2501_0_3082}>
          <View style={styles.View_I10015_2501_0_3076}>
            <View style={styles.View_I10015_2501_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I10015_2501_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3df0ae27-9905-453a-af79-d573e0096dfd"
                }}
                style={styles.ImageBackground_I10015_2501_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/574a8971-4f09-45c4-a9c5-2baffa9409b7"
                }}
                style={styles.ImageBackground_I10015_2501_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a700590a-d815-4a49-aaf6-d06e40439d90"
              }}
              style={styles.ImageBackground_I10015_2501_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e047a674-cd7a-4e4d-b146-4676627325c9"
              }}
              style={styles.ImageBackground_I10015_2501_0_3075}
            />
          </View>
          <View style={styles.View_I10015_2501_0_3077}>
            <Text style={styles.Text_I10015_2501_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d555c220-3b79-4d93-a1c2-a34d3a911fb4"
            }}
            style={styles.ImageBackground_I10015_2501_0_3081}
          />
        </View>
        <View style={styles.View_I10015_2501_0_3083}>
          <Text style={styles.Text_I10015_2501_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I10015_2501_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31d72e66-e1b3-4b6a-a68c-7b9f17d60132"
            }}
            style={styles.ImageBackground_I10015_2501_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdba9e97-8873-43f9-82c9-d0fadb9175c6"
            }}
            style={styles.ImageBackground_I10015_2501_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_10015_2502}>
        <Text style={styles.Text_10015_2502}>
          Welcome. What is your phone number?
        </Text>
      </View>
      <View style={styles.View_10015_2503}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba65e0be-533a-4d03-9b8b-f3b835142ff2"
          }}
          style={styles.ImageBackground_I10015_2503_0_2939}
        />
        <View style={styles.View_I10015_2503_0_2944}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8930deb-aad4-4fa0-8496-0c6e888bd4f0"
            }}
            style={styles.ImageBackground_I10015_2503_0_2943}
          />
        </View>
        <View style={styles.View_I10015_2503_0_2952}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I10015_2503_0_2945}
          />
          <View style={styles.View_I10015_2503_0_2948}>
            <View style={styles.View_I10015_2503_0_2946}>
              <Text style={styles.Text_I10015_2503_0_2946}> </Text>
            </View>
            <View style={styles.View_I10015_2503_0_2947}>
              <Text style={styles.Text_I10015_2503_0_2947}> </Text>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_2951}>
            <View style={styles.View_I10015_2503_0_2949}>
              <Text style={styles.Text_I10015_2503_0_2949}>0</Text>
            </View>
            <View style={styles.View_I10015_2503_0_2950}>
              <Text style={styles.Text_I10015_2503_0_2950}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I10015_2503_0_2957}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I10015_2503_0_2953}
          />
          <View style={styles.View_I10015_2503_0_2956}>
            <View style={styles.View_I10015_2503_0_2954}>
              <Text style={styles.Text_I10015_2503_0_2954}>PGRS</Text>
            </View>
            <View style={styles.View_I10015_2503_0_2955}>
              <Text style={styles.Text_I10015_2503_0_2955}>PGRS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I10015_2503_0_3027}>
          <View style={styles.View_I10015_2503_0_2965}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_2958}
            />
            <View style={styles.View_I10015_2503_0_2961}>
              <View style={styles.View_I10015_2503_0_2959}>
                <Text style={styles.Text_I10015_2503_0_2959}>WXYZ</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7a1a82e-de67-4083-ab7e-0851da9d1c89"
                }}
                style={styles.ImageBackground_I10015_2503_0_2960}
              />
            </View>
            <View style={styles.View_I10015_2503_0_2964}>
              <View style={styles.View_I10015_2503_0_2962}>
                <Text style={styles.Text_I10015_2503_0_2962}>9</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2963}>
                <Text style={styles.Text_I10015_2503_0_2963}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_2970}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_2966}
            />
            <View style={styles.View_I10015_2503_0_2969}>
              <View style={styles.View_I10015_2503_0_2967}>
                <Text style={styles.Text_I10015_2503_0_2967}>8</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2968}>
                <Text style={styles.Text_I10015_2503_0_2968}>8</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_2978}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_2971}
            />
            <View style={styles.View_I10015_2503_0_2974}>
              <View style={styles.View_I10015_2503_0_2972}>
                <Text style={styles.Text_I10015_2503_0_2972}>PGRS</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2973}>
                <Text style={styles.Text_I10015_2503_0_2973}>PGRS</Text>
              </View>
            </View>
            <View style={styles.View_I10015_2503_0_2977}>
              <View style={styles.View_I10015_2503_0_2975}>
                <Text style={styles.Text_I10015_2503_0_2975}>7</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2976}>
                <Text style={styles.Text_I10015_2503_0_2976}>7</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_2986}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_2979}
            />
            <View style={styles.View_I10015_2503_0_2982}>
              <View style={styles.View_I10015_2503_0_2980}>
                <Text style={styles.Text_I10015_2503_0_2980}>MNO</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2981}>
                <Text style={styles.Text_I10015_2503_0_2981}>MNO</Text>
              </View>
            </View>
            <View style={styles.View_I10015_2503_0_2985}>
              <View style={styles.View_I10015_2503_0_2983}>
                <Text style={styles.Text_I10015_2503_0_2983}>6</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2984}>
                <Text style={styles.Text_I10015_2503_0_2984}>6</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_2994}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_2987}
            />
            <View style={styles.View_I10015_2503_0_2990}>
              <View style={styles.View_I10015_2503_0_2988}>
                <Text style={styles.Text_I10015_2503_0_2988}>JKL</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2989}>
                <Text style={styles.Text_I10015_2503_0_2989}>JKL</Text>
              </View>
            </View>
            <View style={styles.View_I10015_2503_0_2993}>
              <View style={styles.View_I10015_2503_0_2991}>
                <Text style={styles.Text_I10015_2503_0_2991}>5</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2992}>
                <Text style={styles.Text_I10015_2503_0_2992}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_3002}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_2995}
            />
            <View style={styles.View_I10015_2503_0_2998}>
              <View style={styles.View_I10015_2503_0_2996}>
                <Text style={styles.Text_I10015_2503_0_2996}>GHI</Text>
              </View>
              <View style={styles.View_I10015_2503_0_2997}>
                <Text style={styles.Text_I10015_2503_0_2997}>GHI</Text>
              </View>
            </View>
            <View style={styles.View_I10015_2503_0_3001}>
              <View style={styles.View_I10015_2503_0_2999}>
                <Text style={styles.Text_I10015_2503_0_2999}>4</Text>
              </View>
              <View style={styles.View_I10015_2503_0_3000}>
                <Text style={styles.Text_I10015_2503_0_3000}>4</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_3010}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_3003}
            />
            <View style={styles.View_I10015_2503_0_3006}>
              <View style={styles.View_I10015_2503_0_3004}>
                <Text style={styles.Text_I10015_2503_0_3004}>DEF</Text>
              </View>
              <View style={styles.View_I10015_2503_0_3005}>
                <Text style={styles.Text_I10015_2503_0_3005}>DEF</Text>
              </View>
            </View>
            <View style={styles.View_I10015_2503_0_3009}>
              <View style={styles.View_I10015_2503_0_3007}>
                <Text style={styles.Text_I10015_2503_0_3007}>3</Text>
              </View>
              <View style={styles.View_I10015_2503_0_3008}>
                <Text style={styles.Text_I10015_2503_0_3008}>3</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_3018}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_3011}
            />
            <View style={styles.View_I10015_2503_0_3014}>
              <View style={styles.View_I10015_2503_0_3012}>
                <Text style={styles.Text_I10015_2503_0_3012}>ABC</Text>
              </View>
              <View style={styles.View_I10015_2503_0_3013}>
                <Text style={styles.Text_I10015_2503_0_3013}>ABC</Text>
              </View>
            </View>
            <View style={styles.View_I10015_2503_0_3017}>
              <View style={styles.View_I10015_2503_0_3015}>
                <Text style={styles.Text_I10015_2503_0_3015}>2</Text>
              </View>
              <View style={styles.View_I10015_2503_0_3016}>
                <Text style={styles.Text_I10015_2503_0_3016}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10015_2503_0_3026}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10015_2503_0_3019}
            />
            <View style={styles.View_I10015_2503_0_3022}>
              <View style={styles.View_I10015_2503_0_3020}>
                <Text style={styles.Text_I10015_2503_0_3020}> </Text>
              </View>
              <View style={styles.View_I10015_2503_0_3021}>
                <Text style={styles.Text_I10015_2503_0_3021}> </Text>
              </View>
            </View>
            <View style={styles.View_I10015_2503_0_3025}>
              <View style={styles.View_I10015_2503_0_3023}>
                <Text style={styles.Text_I10015_2503_0_3023}>1</Text>
              </View>
              <View style={styles.View_I10015_2503_0_3024}>
                <Text style={styles.Text_I10015_2503_0_3024}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I10015_2503_0_3040}>
          <View style={styles.View_I10015_2503_0_3039}>
            <View style={styles.View_I10015_2503_0_3038}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b33d17b3-9cfa-47c0-8f47-5dc0f27e4c41"
                }}
                style={styles.ImageBackground_I10015_2503_0_3028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc3a7fcd-a3cb-47ae-b7b5-49daf42e23a8"
                }}
                style={styles.ImageBackground_I10015_2503_0_3029}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b6a8889-cabb-4d0e-929c-0d5ce9d18cd1"
                }}
                style={styles.ImageBackground_I10015_2503_0_3030}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c5fbb4d-ebcb-4f52-998a-7fb66ff61932"
                }}
                style={styles.ImageBackground_I10015_2503_0_3031}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05fb38a9-4af5-4b3c-bc68-1f6e4782126b"
                }}
                style={styles.ImageBackground_I10015_2503_0_3032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccaa2ae0-a41c-4c1e-94b0-2109a5a2f894"
                }}
                style={styles.ImageBackground_I10015_2503_0_3033}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e70d8696-8404-4616-9594-4d2d78894f99"
                }}
                style={styles.ImageBackground_I10015_2503_0_3034}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f563111f-8def-415f-b627-1c4f8401e39f"
                }}
                style={styles.ImageBackground_I10015_2503_0_3035}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8a792bc-3d0f-48ce-85b4-5a36b103d835"
                }}
                style={styles.ImageBackground_I10015_2503_0_3036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16329a36-00ff-4207-869f-b050c3f79539"
                }}
                style={styles.ImageBackground_I10015_2503_0_3037}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4313b657-8b53-44d2-af08-2a711cf60bb6"
        }}
        style={styles.ImageBackground_10015_2504}
      />
      <View style={styles.View_10015_2676}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa5f6a6b-0489-459b-8ada-8fd77db99a02"
          }}
          style={styles.ImageBackground_10015_2677}
        />
        <View style={styles.View_10015_2678}>
          <Text style={styles.Text_10015_2678}>
            Rename Copy Duplicate Move to Folder
          </Text>
        </View>
        <View style={styles.View_10015_2679}>
          <Text style={styles.Text_10015_2679}>Delete Folder</Text>
        </View>
        <View style={styles.View_10015_2681}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7a6dad8-2ab6-439f-b394-57ca677dee84"
            }}
            style={styles.ImageBackground_10015_2682}
          />
          <View style={styles.View_10015_2683}>
            <View style={styles.View_10015_2684}>
              <Text style={styles.Text_10015_2684}>Folder Name</Text>
            </View>
            <View style={styles.View_10015_2685}>
              <Text style={styles.Text_10015_2685}>
                Secure Folder in Private Vault
              </Text>
            </View>
            <View style={styles.View_10015_2686}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I10015_2686_0_2839}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61f59a9b-cca3-456b-ad6d-67fe7829fc6b"
                }}
                style={styles.ImageBackground_I10015_2686_0_2840}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78a0294a-c260-472e-95ed-42fca0388546"
                }}
                style={styles.ImageBackground_I10015_2686_0_2841}
              />
              <View style={styles.View_I10015_2686_0_2844}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d9a4ebe-73bc-40ec-a998-2c8347271f57"
                  }}
                  style={styles.ImageBackground_I10015_2686_0_2842}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e99a41fd-7516-4b63-b254-8843e2f77d9e"
                  }}
                  style={styles.ImageBackground_I10015_2686_0_2843}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96505e06-989d-43a2-a05a-3b41d9583243"
              }}
              style={styles.ImageBackground_10015_2687}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c09faab9-56a5-4de5-8bd2-db603548d904"
          }}
          style={styles.ImageBackground_10015_2690}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c89717c0-c052-4c79-b1e1-e87488e945bc"
          }}
          style={styles.ImageBackground_10015_2691}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56b460ce-b14e-4c9e-b053-2c4c0f2acf65"
          }}
          style={styles.ImageBackground_10015_2692}
        />
      </View>
      <View style={styles.View_10015_2700}>
        <View style={styles.View_10015_2701}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4824917-7f5c-42d3-aa9a-fff6d48cc2bd"
            }}
            style={styles.ImageBackground_10015_2702}
          />
          <View style={styles.View_10015_2703}>
            <Text style={styles.Text_10015_2703}>
              Profile Settings SafeTBoxes Help
            </Text>
          </View>
          <View style={styles.View_10015_2704}>
            <Text style={styles.Text_10015_2704}>Log out</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66e34176-0a0a-4497-9697-0742ac0f9308"
            }}
            style={styles.ImageBackground_10015_2705}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("175%") },
  ImageBackground_10015_2500: {
    width: wp("100%"),
    height: hp("175%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10015_2501: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2501_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2501_0_3082: {
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
  View_I10015_2501_0_3076: {
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
  View_I10015_2501_0_3067: {
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
  View_I10015_2501_0_3063: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10015_2501_0_3066: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10015_2501_0_3065: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10015_2501_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I10015_2501_0_3075: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10015_2501_0_3077: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2501_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10015_2501_0_3081: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10015_2501_0_3083: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2501_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2501_0_3093: {
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
  ImageBackground_I10015_2501_0_3088: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10015_2501_0_3092: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10015_2502: {
    width: wp("75%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_10015_2502: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10015_2503: {
    width: wp("100%"),
    height: hp("57%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10015_2503_0_2939: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2944: {
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
  ImageBackground_I10015_2503_0_2943: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10015_2503_0_2952: {
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
  View_I10015_2503_0_2945: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2948: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2946: {
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
  Text_I10015_2503_0_2946: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2947: {
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
  Text_I10015_2503_0_2947: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2951: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2949: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2949: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2950: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2950: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2957: {
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
  View_I10015_2503_0_2953: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2956: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2954: {
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
  Text_I10015_2503_0_2954: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2955: {
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
  Text_I10015_2503_0_2955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3027: {
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
  View_I10015_2503_0_2965: {
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
  View_I10015_2503_0_2958: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2961: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2959: {
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
  Text_I10015_2503_0_2959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10015_2503_0_2960: {
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
  View_I10015_2503_0_2964: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2962: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2962: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2963: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2963: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2970: {
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
  View_I10015_2503_0_2966: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2969: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2967: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2967: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2968: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2968: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2978: {
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
  View_I10015_2503_0_2971: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2974: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2972: {
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
  Text_I10015_2503_0_2972: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2973: {
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
  Text_I10015_2503_0_2973: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2977: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2975: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2975: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2976: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2976: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2986: {
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
  View_I10015_2503_0_2979: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2982: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2980: {
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
  Text_I10015_2503_0_2980: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2981: {
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
  Text_I10015_2503_0_2981: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2985: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2983: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2983: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2984: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2994: {
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2987: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2990: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2988: {
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
  Text_I10015_2503_0_2988: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2989: {
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
  Text_I10015_2503_0_2989: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2993: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2991: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2991: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2992: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2992: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3002: {
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
  View_I10015_2503_0_2995: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_2998: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2996: {
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
  Text_I10015_2503_0_2996: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_2997: {
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
  Text_I10015_2503_0_2997: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3001: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_2999: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_2999: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3000: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_3000: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3010: {
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
  View_I10015_2503_0_3003: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_3006: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_3004: {
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
  Text_I10015_2503_0_3004: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3005: {
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
  Text_I10015_2503_0_3005: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3009: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_3007: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_3007: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3008: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_3008: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3018: {
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
  View_I10015_2503_0_3011: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_3014: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_3012: {
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
  Text_I10015_2503_0_3012: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3013: {
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
  Text_I10015_2503_0_3013: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3017: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_3015: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_3015: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3016: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_3016: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3026: {
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
  View_I10015_2503_0_3019: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2503_0_3022: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_3020: {
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
  Text_I10015_2503_0_3020: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3021: {
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
  Text_I10015_2503_0_3021: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3025: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2503_0_3023: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_3023: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3024: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2503_0_3024: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2503_0_3040: {
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
  View_I10015_2503_0_3039: {
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
  View_I10015_2503_0_3038: {
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
  ImageBackground_I10015_2503_0_3028: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I10015_2503_0_3029: {
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
  ImageBackground_I10015_2503_0_3030: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I10015_2503_0_3031: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10015_2503_0_3032: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I10015_2503_0_3033: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_I10015_2503_0_3034: {
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
  ImageBackground_I10015_2503_0_3035: {
    width: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I10015_2503_0_3036: {
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
  ImageBackground_I10015_2503_0_3037: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_10015_2504: {
    width: wp("61%"),
    height: hp("46%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    resizeMode: "cover"
  },
  View_10015_2676: {
    width: wp("47%"),
    height: hp("75%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_10015_2677: {
    width: wp("47%"),
    height: hp("75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10015_2678: {
    width: wp("19%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_10015_2678: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10015_2679: {
    width: wp("17%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_10015_2679: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10015_2681: {
    width: wp("42%"),
    height: hp("19%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_10015_2682: {
    width: wp("42%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10015_2683: {
    width: wp("24%"),
    height: hp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_10015_2684: {
    width: wp("16%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10015_2684: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10015_2685: {
    width: wp("24%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10015_2685: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10015_2686: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10015_2686_0_2839: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I10015_2686_0_2840: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I10015_2686_0_2841: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I10015_2686_0_2844: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10015_2686_0_2842: {
    width: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I10015_2686_0_2843: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_10015_2687: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_10015_2690: {
    width: wp("20%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_10015_2691: {
    width: wp("20%"),
    height: hp("0%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_10015_2692: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_10015_2700: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_10015_2701: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10015_2702: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10015_2703: {
    width: wp("15%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10015_2703: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10015_2704: {
    width: wp("10%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10015_2704: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10015_2705: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
