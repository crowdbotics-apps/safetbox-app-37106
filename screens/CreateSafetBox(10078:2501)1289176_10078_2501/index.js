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
      <View style={styles.View_10078_2502}>
        <View style={styles.View_10078_2503}>
          <Text style={styles.Text_10078_2503}>Welcome back John</Text>
        </View>
      </View>
      <View style={styles.View_10078_2504}>
        <View style={styles.View_10078_2505} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15e5e0b1-881e-424e-9ea6-98c1dc17577c"
          }}
          style={styles.ImageBackground_10078_2506}
        />
        <View style={styles.View_10078_2510}>
          <Text style={styles.Text_10078_2510}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2511}>
          <Text style={styles.Text_10078_2511}>December 20.2020</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0f18e0c-e1af-49f1-9bdf-2651902e66ca"
          }}
          style={styles.ImageBackground_10078_2512}
        />
      </View>
      <View style={styles.View_10078_2513}>
        <View style={styles.View_10078_2514} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa353b99-9e21-4e7e-8db9-66bf53a598a3"
          }}
          style={styles.ImageBackground_10078_2515}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01470450-0f9c-4325-bb03-a99b8cd77dc4"
          }}
          style={styles.ImageBackground_10078_2516}
        />
        <View style={styles.View_10078_2520}>
          <Text style={styles.Text_10078_2520}>Design</Text>
        </View>
        <View style={styles.View_10078_2521}>
          <Text style={styles.Text_10078_2521}>December 20.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2522}>
        <View style={styles.View_10078_2523} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36d336df-d489-4eed-a30b-874492d95525"
          }}
          style={styles.ImageBackground_10078_2524}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2c8f93d-d56c-4d12-91c9-cff3205a5d9a"
          }}
          style={styles.ImageBackground_10078_2525}
        />
        <View style={styles.View_10078_2529}>
          <Text style={styles.Text_10078_2529}>Prototypes</Text>
        </View>
        <View style={styles.View_10078_2530}>
          <Text style={styles.Text_10078_2530}>Novemaber 22.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2531}>
        <View style={styles.View_10078_2532} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42145e31-6ef2-497a-bf4a-07f483d95f3d"
          }}
          style={styles.ImageBackground_10078_2533}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79eaddbf-ab10-4cd0-b881-dc2c05dc2df1"
          }}
          style={styles.ImageBackground_10078_2534}
        />
        <View style={styles.View_10078_2538}>
          <Text style={styles.Text_10078_2538}>References</Text>
        </View>
        <View style={styles.View_10078_2539}>
          <Text style={styles.Text_10078_2539}>Novemaber 22.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2540}>
        <View style={styles.View_10078_2541} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/496f81f9-4c83-4797-bbe7-2fcf349ed2bd"
          }}
          style={styles.ImageBackground_10078_2542}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7942e283-03ce-468b-ab73-bb898e57dfc5"
          }}
          style={styles.ImageBackground_10078_2543}
        />
        <View style={styles.View_10078_2547}>
          <Text style={styles.Text_10078_2547}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_2548}>
          <Text style={styles.Text_10078_2548}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2549}>
        <View style={styles.View_10078_2550} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b551951-b54a-46b3-bcee-0741b0889129"
          }}
          style={styles.ImageBackground_10078_2551}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65b27b6e-adf7-405f-99d4-6501550590d5"
          }}
          style={styles.ImageBackground_10078_2552}
        />
        <View style={styles.View_10078_2556}>
          <Text style={styles.Text_10078_2556}>Portfolio</Text>
        </View>
        <View style={styles.View_10078_2557}>
          <Text style={styles.Text_10078_2557}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2558}>
        <View style={styles.View_10078_2559} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ad8bbbf-65c9-46d8-8cad-acb0905c31af"
          }}
          style={styles.ImageBackground_10078_2560}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a5ab74b-40f6-4ab3-a751-f23008da0856"
          }}
          style={styles.ImageBackground_10078_2561}
        />
        <View style={styles.View_10078_2565}>
          <Text style={styles.Text_10078_2565}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2566}>
          <Text style={styles.Text_10078_2566}>December 20.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2567}>
        <View style={styles.View_10078_2568} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67c47646-94d4-4069-9b2e-cc802d540892"
          }}
          style={styles.ImageBackground_10078_2569}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b51f976-cbf6-49a9-91f2-013846d8249e"
          }}
          style={styles.ImageBackground_10078_2570}
        />
        <View style={styles.View_10078_2574}>
          <Text style={styles.Text_10078_2574}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_2575}>
          <Text style={styles.Text_10078_2575}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2576}>
        <View style={styles.View_10078_2577} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca635ed2-2cb3-4954-95a0-09705fecdfe6"
          }}
          style={styles.ImageBackground_10078_2578}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6ef0ff1-1a00-4764-8cc3-cd291f0e811c"
          }}
          style={styles.ImageBackground_10078_2579}
        />
        <View style={styles.View_10078_2583}>
          <Text style={styles.Text_10078_2583}>Avatars</Text>
        </View>
        <View style={styles.View_10078_2584}>
          <Text style={styles.Text_10078_2584}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2585}>
        <View style={styles.View_10078_2586} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa2a0195-aa5d-46a7-8f93-c25ed0a0400d"
          }}
          style={styles.ImageBackground_10078_2587}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55f103a5-e7ea-47a6-979b-d00f92b4d578"
          }}
          style={styles.ImageBackground_10078_2588}
        />
        <View style={styles.View_10078_2592}>
          <Text style={styles.Text_10078_2592}>Clients</Text>
        </View>
        <View style={styles.View_10078_2593}>
          <Text style={styles.Text_10078_2593}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2594}>
        <View style={styles.View_10078_2595} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72566b97-b767-4870-9c63-c95e53c458b7"
          }}
          style={styles.ImageBackground_10078_2596}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75275af2-589e-4bf7-90cd-f864ef22d40c"
          }}
          style={styles.ImageBackground_10078_2597}
        />
        <View style={styles.View_10078_2601}>
          <Text style={styles.Text_10078_2601}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_2602}>
          <Text style={styles.Text_10078_2602}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2603}>
        <View style={styles.View_10078_2604} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33a98b96-7625-4e63-8f67-ea7f903be3ab"
          }}
          style={styles.ImageBackground_10078_2605}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5e05d46-b97d-4a97-815e-5e50aeddbe75"
          }}
          style={styles.ImageBackground_10078_2606}
        />
        <View style={styles.View_10078_2610}>
          <Text style={styles.Text_10078_2610}>Portfolio</Text>
        </View>
        <View style={styles.View_10078_2611}>
          <Text style={styles.Text_10078_2611}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2612}>
        <View style={styles.View_10078_2613} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38703993-54fe-4802-b3a4-f15f8b12a415"
          }}
          style={styles.ImageBackground_10078_2614}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/698b4d38-5ef3-4acf-9931-de8449a12b1b"
          }}
          style={styles.ImageBackground_10078_2615}
        />
        <View style={styles.View_10078_2619}>
          <Text style={styles.Text_10078_2619}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_2620}>
          <Text style={styles.Text_10078_2620}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2621}>
        <View style={styles.View_10078_2622} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2936869-2a17-4a9e-bdda-9262916c25e7"
          }}
          style={styles.ImageBackground_10078_2623}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afe639cb-b23a-4c12-ad9b-5e9700453695"
          }}
          style={styles.ImageBackground_10078_2624}
        />
        <View style={styles.View_10078_2628}>
          <Text style={styles.Text_10078_2628}>Avatars</Text>
        </View>
        <View style={styles.View_10078_2629}>
          <Text style={styles.Text_10078_2629}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2630}>
        <View style={styles.View_10078_2631} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e68496e-0e29-47cb-ab5b-c3ab78f01dfa"
          }}
          style={styles.ImageBackground_10078_2632}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6da85577-da0b-4914-b7e9-5892c1676abc"
          }}
          style={styles.ImageBackground_10078_2633}
        />
        <View style={styles.View_10078_2637}>
          <Text style={styles.Text_10078_2637}>Clients</Text>
        </View>
        <View style={styles.View_10078_2638}>
          <Text style={styles.Text_10078_2638}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2639}>
        <View style={styles.View_10078_2640} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7583f328-a900-49b8-aee6-dac3d94eed66"
          }}
          style={styles.ImageBackground_10078_2641}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5e6b007-5310-46c7-8f50-8b29229b9461"
          }}
          style={styles.ImageBackground_10078_2642}
        />
        <View style={styles.View_10078_2646}>
          <Text style={styles.Text_10078_2646}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_2647}>
          <Text style={styles.Text_10078_2647}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2648}>
        <View style={styles.View_10078_2649} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0a12dc6-ab9d-446f-8e1d-24e7995e21bc"
          }}
          style={styles.ImageBackground_10078_2650}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cf50182-d3f4-417a-a22c-bd24129de30b"
          }}
          style={styles.ImageBackground_10078_2651}
        />
        <View style={styles.View_10078_2655}>
          <Text style={styles.Text_10078_2655}>Portfolio</Text>
        </View>
        <View style={styles.View_10078_2656}>
          <Text style={styles.Text_10078_2656}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2657}>
        <View style={styles.View_10078_2658} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7902bf4-77fd-4f4d-8db7-32f2e9e32328"
          }}
          style={styles.ImageBackground_10078_2659}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1e1492c-a790-4388-b3e1-0e2a179d6cac"
          }}
          style={styles.ImageBackground_10078_2660}
        />
        <View style={styles.View_10078_2664}>
          <Text style={styles.Text_10078_2664}>SVG Icons</Text>
        </View>
        <View style={styles.View_10078_2665}>
          <Text style={styles.Text_10078_2665}>December 14.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2666}>
        <View style={styles.View_10078_2667} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72dcd190-06e7-403f-aebf-ada6ad376d25"
          }}
          style={styles.ImageBackground_10078_2668}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11080d97-473e-45e0-acf3-a934da7298a3"
          }}
          style={styles.ImageBackground_10078_2669}
        />
        <View style={styles.View_10078_2673}>
          <Text style={styles.Text_10078_2673}>Avatars</Text>
        </View>
        <View style={styles.View_10078_2674}>
          <Text style={styles.Text_10078_2674}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2675}>
        <View style={styles.View_10078_2676} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c30066aa-5758-4d97-a01d-807af71b9a20"
          }}
          style={styles.ImageBackground_10078_2677}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce425953-dd81-4ba6-96a1-fc271c955efc"
          }}
          style={styles.ImageBackground_10078_2678}
        />
        <View style={styles.View_10078_2682}>
          <Text style={styles.Text_10078_2682}>Clients</Text>
        </View>
        <View style={styles.View_10078_2683}>
          <Text style={styles.Text_10078_2683}>Novemaber 10.2020</Text>
        </View>
      </View>
      <View style={styles.View_10078_2684}>
        <View style={styles.View_10078_2685} />
        <View style={styles.View_10078_2686}>
          <Text style={styles.Text_10078_2686}>Search SafeTBoxes</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/637f916f-4e46-4a37-8e66-c08d73340e44"
          }}
          style={styles.ImageBackground_10078_2687}
        />
      </View>
      <View style={styles.View_10078_2688}>
        <Text style={styles.Text_10078_2688}>Recent</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b765fef1-f674-44e0-85b3-ea218b36ea6b"
        }}
        style={styles.ImageBackground_10078_2689}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e07453f4-7eea-4f37-8e10-70662832693f"
        }}
        style={styles.ImageBackground_10078_2690}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02cefe66-526b-4b71-85e1-494d3f98bbd9"
        }}
        style={styles.ImageBackground_10078_2694}
      />
      <View style={styles.View_10078_2696}>
        <View style={styles.View_10078_2697}>
          <View style={styles.View_10078_2698} />
          <View style={styles.View_10078_2699} />
          <View style={styles.View_10078_2700} />
          <View style={styles.View_10078_2701} />
          <View style={styles.View_10078_2702} />
          <View style={styles.View_10078_2703} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41f0a20d-dda6-4b7b-9879-b35ed39b7932"
        }}
        style={styles.ImageBackground_10078_2704}
      />
      <View style={styles.View_10078_2710} />
      <View style={styles.View_10078_2719}>
        <View style={styles.View_10078_2711} />
        <View style={styles.View_10078_2720}>
          <View style={styles.View_10078_2721} />
          <View style={styles.View_10078_2722}>
            <View style={styles.View_10078_2723}>
              <View style={styles.View_10078_2724}>
                <Text style={styles.Text_10078_2724}>Create</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_10078_2716}>
          <Text style={styles.Text_10078_2716}>New SafeT Box</Text>
        </View>
        <View style={styles.View_10078_2712} />
        <View style={styles.View_10078_2713} />
        <View style={styles.View_10078_2717} />
        <View style={styles.View_10078_2714}>
          <Text style={styles.Text_10078_2714}>Vault Name</Text>
        </View>
        <View style={styles.View_10078_2715}>
          <Text style={styles.Text_10078_2715}>Administrative Email</Text>
        </View>
        <View style={styles.View_10078_2718}>
          <Text style={styles.Text_10078_2718}>Password</Text>
        </View>
      </View>
      <View style={styles.View_10078_2705}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33e6001b-4fbb-4e37-a1f3-895ab2c34753"
          }}
          style={styles.ImageBackground_10078_2706}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34aa7390-a7ba-476d-a310-9cd1caff8e12"
          }}
          style={styles.ImageBackground_10078_2707}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  View_10078_2502: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%")
  },
  View_10078_2503: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2503: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2504: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("49%")
  },
  View_10078_2505: {
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
  ImageBackground_10078_2506: {
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
  View_10078_2510: {
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
  Text_10078_2510: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2511: {
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
  Text_10078_2511: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2512: {
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
  View_10078_2513: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("96%")
  },
  View_10078_2514: {
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
  ImageBackground_10078_2515: {
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
  ImageBackground_10078_2516: {
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
  View_10078_2520: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_2520: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2521: {
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
  Text_10078_2521: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2522: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("73%")
  },
  View_10078_2523: {
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
  ImageBackground_10078_2524: {
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
  ImageBackground_10078_2525: {
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
  View_10078_2529: {
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
  Text_10078_2529: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2530: {
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
  Text_10078_2530: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2531: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("119%")
  },
  View_10078_2532: {
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
  ImageBackground_10078_2533: {
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
  ImageBackground_10078_2534: {
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
  View_10078_2538: {
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
  Text_10078_2538: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2539: {
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
  Text_10078_2539: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2540: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("49%")
  },
  View_10078_2541: {
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
  ImageBackground_10078_2542: {
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
  ImageBackground_10078_2543: {
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
  View_10078_2547: {
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
  Text_10078_2547: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2548: {
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
  Text_10078_2548: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2549: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("96%")
  },
  View_10078_2550: {
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
  ImageBackground_10078_2551: {
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
  ImageBackground_10078_2552: {
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
  View_10078_2556: {
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
  Text_10078_2556: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2557: {
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
  Text_10078_2557: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2558: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("143%")
  },
  View_10078_2559: {
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
  ImageBackground_10078_2560: {
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
  ImageBackground_10078_2561: {
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
  View_10078_2565: {
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
  Text_10078_2565: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2566: {
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
  Text_10078_2566: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2567: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("143%")
  },
  View_10078_2568: {
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
  ImageBackground_10078_2569: {
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
  ImageBackground_10078_2570: {
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
  View_10078_2574: {
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
  Text_10078_2574: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2575: {
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
  Text_10078_2575: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2576: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("73%")
  },
  View_10078_2577: {
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
  ImageBackground_10078_2578: {
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
  ImageBackground_10078_2579: {
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
  View_10078_2583: {
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
  Text_10078_2583: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2584: {
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
  Text_10078_2584: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2585: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("119%")
  },
  View_10078_2586: {
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
  ImageBackground_10078_2587: {
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
  ImageBackground_10078_2588: {
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
  View_10078_2592: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_2592: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2593: {
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
  Text_10078_2593: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2594: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("49%")
  },
  View_10078_2595: {
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
  ImageBackground_10078_2596: {
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
  ImageBackground_10078_2597: {
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
  View_10078_2601: {
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
  Text_10078_2601: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2602: {
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
  Text_10078_2602: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2603: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("96%")
  },
  View_10078_2604: {
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
  ImageBackground_10078_2605: {
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
  ImageBackground_10078_2606: {
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
  View_10078_2610: {
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
  Text_10078_2610: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2611: {
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
  Text_10078_2611: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2612: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("143%")
  },
  View_10078_2613: {
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
  ImageBackground_10078_2614: {
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
  ImageBackground_10078_2615: {
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
  View_10078_2619: {
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
  Text_10078_2619: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2620: {
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
  Text_10078_2620: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2621: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("73%")
  },
  View_10078_2622: {
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
  ImageBackground_10078_2623: {
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
  ImageBackground_10078_2624: {
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
  View_10078_2628: {
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
  Text_10078_2628: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2629: {
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
  Text_10078_2629: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2630: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("119%")
  },
  View_10078_2631: {
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
  ImageBackground_10078_2632: {
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
  ImageBackground_10078_2633: {
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
  View_10078_2637: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_2637: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2638: {
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
  Text_10078_2638: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2639: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("49%")
  },
  View_10078_2640: {
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
  ImageBackground_10078_2641: {
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
  ImageBackground_10078_2642: {
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
  View_10078_2646: {
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
  Text_10078_2646: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2647: {
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
  Text_10078_2647: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2648: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("96%")
  },
  View_10078_2649: {
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
  ImageBackground_10078_2650: {
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
  ImageBackground_10078_2651: {
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
  View_10078_2655: {
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
  Text_10078_2655: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2656: {
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
  Text_10078_2656: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2657: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("143%")
  },
  View_10078_2658: {
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
  ImageBackground_10078_2659: {
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
  ImageBackground_10078_2660: {
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
  View_10078_2664: {
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
  Text_10078_2664: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2665: {
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
  Text_10078_2665: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2666: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("73%")
  },
  View_10078_2667: {
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
  ImageBackground_10078_2668: {
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
  ImageBackground_10078_2669: {
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
  View_10078_2673: {
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
  Text_10078_2673: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2674: {
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
  Text_10078_2674: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2675: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("119%")
  },
  View_10078_2676: {
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
  ImageBackground_10078_2677: {
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
  ImageBackground_10078_2678: {
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
  View_10078_2682: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_10078_2682: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2683: {
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
  Text_10078_2683: {
    color: "rgba(172, 64, 64, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2684: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%")
  },
  View_10078_2685: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10078_2686: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_10078_2686: {
    color: "rgba(34, 33, 91, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2687: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  View_10078_2688: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_10078_2688: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2689: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("40%")
  },
  ImageBackground_10078_2690: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("24%")
  },
  ImageBackground_10078_2694: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%")
  },
  View_10078_2696: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("40%")
  },
  View_10078_2697: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2698: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2699: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2700: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2701: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2702: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2703: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  ImageBackground_10078_2704: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("42%")
  },
  View_10078_2710: {
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
  View_10078_2719: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("33%")
  },
  View_10078_2711: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 220, 220, 1)"
  },
  View_10078_2720: {
    width: wp("21%"),
    height: hp("6%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_10078_2721: {
    width: wp("21%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 125, 244, 1)"
  },
  View_10078_2722: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_10078_2723: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2724: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2724: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2716: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_10078_2716: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2712: {
    width: wp("40%"),
    height: hp("9%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10078_2713: {
    width: wp("40%"),
    height: hp("9%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10078_2717: {
    width: wp("40%"),
    height: hp("9%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 242, 254, 1)",
    borderWidth: 1
  },
  View_10078_2714: {
    width: wp("12%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10078_2714: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2715: {
    width: wp("18%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10078_2715: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2718: {
    width: wp("8%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10078_2718: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2705: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("164%")
  },
  ImageBackground_10078_2706: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10078_2707: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
