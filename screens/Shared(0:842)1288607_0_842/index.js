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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af06bcfd-4ad6-4b5b-a8ac-54f741ff4f4d"
        }}
        style={styles.ImageBackground_0_1418}
      />
      <View style={styles.View_0_1421}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2f49e28-a2cd-4053-bc10-a2520bd91f48"
          }}
          style={styles.ImageBackground_0_1419}
        />
        <View style={styles.View_0_1420}>
          <Text style={styles.Text_0_1420}>Most Recent</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_0_1620}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("10015_3034"))
        }
      >
        <View source={{ uri: "null" }} style={styles.View_0_1422} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05e24a01-4f3f-4d87-b8ea-84e11606df0a"
          }}
          style={styles.ImageBackground_0_1619}
        />
        <View style={styles.View_0_1450}>
          <View style={styles.View_0_1449}>
            <View style={styles.View_0_1432}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd9a6dc8-030a-461c-86ba-de55c0c25310"
                }}
                style={styles.ImageBackground_0_1423}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f15c8259-b231-4061-a38b-2a328d354e93"
                }}
                style={styles.ImageBackground_0_1424}
              />
              <View style={styles.View_0_1431}>
                <View style={styles.View_0_1427}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55bac9f6-89ff-4105-8ed5-6450c55a25ec"
                    }}
                    style={styles.ImageBackground_0_1425}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57b989d9-7633-41ff-8e29-ea211529759c"
                    }}
                    style={styles.ImageBackground_0_1426}
                  />
                </View>
                <View style={styles.View_0_1430}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8d49073-5917-491d-96db-2ee54195c726"
                    }}
                    style={styles.ImageBackground_0_1428}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a528b93-d1b1-4cc5-99a0-5110e8093db3"
                    }}
                    style={styles.ImageBackground_0_1429}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1444}>
              <View style={styles.View_0_1433}>
                <Text style={styles.Text_0_1433}>2018 Financials</Text>
              </View>
              <View style={styles.View_0_1442}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fa36383-d580-473a-a3aa-ab6dda1df1b3"
                  }}
                  style={styles.ImageBackground_0_1436}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07b31781-ba6a-4351-bcbd-6cad671d3d39"
                  }}
                  style={styles.ImageBackground_0_1439}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4d86017-6683-4d64-9494-acc29d8583bc"
                  }}
                  style={styles.ImageBackground_0_1440}
                />
                <View style={styles.View_0_1441}>
                  <Text style={styles.Text_0_1441}>38</Text>
                </View>
              </View>
              <View style={styles.View_0_1443}>
                <Text style={styles.Text_0_1443}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.View_0_1448}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46d9aa45-7fe0-4136-a676-9d153985a993"
                }}
                style={styles.ImageBackground_0_1445}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86802d44-c44f-4d6f-bcd5-d580d0f4e6bf"
                }}
                style={styles.ImageBackground_0_1446}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e489b4d1-43b4-4214-895e-f2efe365b6d1"
                }}
                style={styles.ImageBackground_0_1447}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1478}>
          <View style={styles.View_0_1477}>
            <View style={styles.View_0_1460}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56a2ef10-c286-4efb-84f0-4b1b2b3d213e"
                }}
                style={styles.ImageBackground_0_1451}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1720ff56-5fd4-4ff1-ad34-1adf7197eba5"
                }}
                style={styles.ImageBackground_0_1452}
              />
              <View style={styles.View_0_1459}>
                <View style={styles.View_0_1455}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c1c9cf9-ab29-49e2-8fcb-3a09b8aa89c0"
                    }}
                    style={styles.ImageBackground_0_1453}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31ac845e-e5c9-42f9-b966-0b89fdf31d82"
                    }}
                    style={styles.ImageBackground_0_1454}
                  />
                </View>
                <View style={styles.View_0_1458}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cacf97a-7d92-4c7e-a66f-0fdb5ee9158e"
                    }}
                    style={styles.ImageBackground_0_1456}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62e646c5-aafc-4287-a1de-252cc9997639"
                    }}
                    style={styles.ImageBackground_0_1457}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1472}>
              <View style={styles.View_0_1461}>
                <Text style={styles.Text_0_1461}>Client Meeting Notes</Text>
              </View>
              <View style={styles.View_0_1470}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf584b80-4d21-42ee-9863-e67ac4a3155c"
                  }}
                  style={styles.ImageBackground_0_1464}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5db87a8-05db-4edd-8f09-cfb266230cb4"
                  }}
                  style={styles.ImageBackground_0_1467}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e1d3288-f933-48b7-b16b-f754e3e91022"
                  }}
                  style={styles.ImageBackground_0_1468}
                />
                <View style={styles.View_0_1469}>
                  <Text style={styles.Text_0_1469}>38</Text>
                </View>
              </View>
              <View style={styles.View_0_1471}>
                <Text style={styles.Text_0_1471}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.View_0_1476}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2ec4594-6429-4a27-b782-e35842b0aaee"
                }}
                style={styles.ImageBackground_0_1473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/383d230d-616b-44c1-bb3d-a8144ed21408"
                }}
                style={styles.ImageBackground_0_1474}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/087def1d-eb61-4834-a729-81a6424a51ea"
                }}
                style={styles.ImageBackground_0_1475}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1506}>
          <View style={styles.View_0_1505}>
            <View style={styles.View_0_1488}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0565b74e-9ebd-40d4-98f9-3c307179d479"
                }}
                style={styles.ImageBackground_0_1479}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d46058d9-d8da-4c11-a7d0-ea64f9c8dca8"
                }}
                style={styles.ImageBackground_0_1480}
              />
              <View style={styles.View_0_1487}>
                <View style={styles.View_0_1483}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22a1cd7c-b3d7-4a91-957d-9ee3c54e0c56"
                    }}
                    style={styles.ImageBackground_0_1481}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56b00c7c-dc8f-4706-9038-c0e8a6360b18"
                    }}
                    style={styles.ImageBackground_0_1482}
                  />
                </View>
                <View style={styles.View_0_1486}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33471940-3e58-4d5f-81f2-0972148ea8d0"
                    }}
                    style={styles.ImageBackground_0_1484}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a421f0e-e21b-4733-9cd1-62138d7673ad"
                    }}
                    style={styles.ImageBackground_0_1485}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1500}>
              <View style={styles.View_0_1489}>
                <Text style={styles.Text_0_1489}>Event Photographs, Milan</Text>
              </View>
              <View style={styles.View_0_1498}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2898a0f9-fcc5-4413-8768-1b933d58236d"
                  }}
                  style={styles.ImageBackground_0_1492}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fe98c25-09ed-4c9f-a703-5feeaaed0d06"
                  }}
                  style={styles.ImageBackground_0_1495}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11554e66-1ac3-4120-8fad-a30f89563715"
                  }}
                  style={styles.ImageBackground_0_1496}
                />
                <View style={styles.View_0_1497}>
                  <Text style={styles.Text_0_1497}>38</Text>
                </View>
              </View>
              <View style={styles.View_0_1499}>
                <Text style={styles.Text_0_1499}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.View_0_1504}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63d425fc-3a14-4000-91a7-08d10b8b4ea9"
                }}
                style={styles.ImageBackground_0_1501}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afa479fe-40e9-489c-9c99-bbb06b830aa8"
                }}
                style={styles.ImageBackground_0_1502}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/913759a5-db4d-44b5-9c0a-f661c7b54846"
                }}
                style={styles.ImageBackground_0_1503}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1534}>
          <View style={styles.View_0_1533}>
            <View style={styles.View_0_1516}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/784dbab1-43fc-4120-9240-7d44015bd8f2"
                }}
                style={styles.ImageBackground_0_1507}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/315d1840-397a-42ab-9e00-fe50d9fd9b09"
                }}
                style={styles.ImageBackground_0_1508}
              />
              <View style={styles.View_0_1515}>
                <View style={styles.View_0_1511}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f44aa281-edf0-4202-9c97-1fbc4f31b471"
                    }}
                    style={styles.ImageBackground_0_1509}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f258fda7-3fb4-408a-8d01-0ee7b5184c64"
                    }}
                    style={styles.ImageBackground_0_1510}
                  />
                </View>
                <View style={styles.View_0_1514}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47992856-a9c8-46b6-b943-b5989cfdace3"
                    }}
                    style={styles.ImageBackground_0_1512}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/818dfecf-ba8e-4304-b03a-dfa3bca794e7"
                    }}
                    style={styles.ImageBackground_0_1513}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1528}>
              <View style={styles.View_0_1517}>
                <Text style={styles.Text_0_1517}>Lorem Ipsum Folder</Text>
              </View>
              <View style={styles.View_0_1526}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42942cfd-2fd1-43d9-b733-29d7d43d3101"
                  }}
                  style={styles.ImageBackground_0_1520}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8eaaa10d-b9f0-4a38-a3d3-04d8eb3d4dde"
                  }}
                  style={styles.ImageBackground_0_1523}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be8e25cd-f833-4583-a15f-2ee148f8b078"
                  }}
                  style={styles.ImageBackground_0_1524}
                />
                <View style={styles.View_0_1525}>
                  <Text style={styles.Text_0_1525}>38</Text>
                </View>
              </View>
              <View style={styles.View_0_1527}>
                <Text style={styles.Text_0_1527}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.View_0_1532}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d91e0ebf-47a6-413a-b49b-47f9cb87751f"
                }}
                style={styles.ImageBackground_0_1529}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9627f0f8-d17a-4fa6-b170-925fb6b378e3"
                }}
                style={styles.ImageBackground_0_1530}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fd3eb1d-cbff-431d-960c-6538eef89740"
                }}
                style={styles.ImageBackground_0_1531}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1562}>
          <View style={styles.View_0_1561}>
            <View style={styles.View_0_1544}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7e2d584-884c-4bbd-81fb-0ed93e01a0c7"
                }}
                style={styles.ImageBackground_0_1535}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a05f5a3-b9e3-4e46-853f-17fde448c487"
                }}
                style={styles.ImageBackground_0_1536}
              />
              <View style={styles.View_0_1543}>
                <View style={styles.View_0_1539}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e51d476-47b0-449e-b8c1-234dd3bca47e"
                    }}
                    style={styles.ImageBackground_0_1537}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c158ca97-afd4-47ec-91ce-33c86417e658"
                    }}
                    style={styles.ImageBackground_0_1538}
                  />
                </View>
                <View style={styles.View_0_1542}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f2cd7cd-88ac-4362-8963-2b62c68f8b05"
                    }}
                    style={styles.ImageBackground_0_1540}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/044e53a3-e6dd-4bec-92e5-febba4beeb15"
                    }}
                    style={styles.ImageBackground_0_1541}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1556}>
              <View style={styles.View_0_1545}>
                <Text style={styles.Text_0_1545}>Narwhal Collection</Text>
              </View>
              <View style={styles.View_0_1554}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29e2ced2-2690-4695-a923-2a4464f66a5e"
                  }}
                  style={styles.ImageBackground_0_1548}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26b9b2cc-31a9-449b-ac2b-35b933a60c8c"
                  }}
                  style={styles.ImageBackground_0_1551}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70fbbbca-5a1c-4381-95a2-650c5df9ca20"
                  }}
                  style={styles.ImageBackground_0_1552}
                />
                <View style={styles.View_0_1553}>
                  <Text style={styles.Text_0_1553}>38</Text>
                </View>
              </View>
              <View style={styles.View_0_1555}>
                <Text style={styles.Text_0_1555}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.View_0_1560}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/485a03b4-16a8-44a7-a2ac-9b92c6189277"
                }}
                style={styles.ImageBackground_0_1557}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bf09f0b-91dc-4202-8dd7-9906de8a2bae"
                }}
                style={styles.ImageBackground_0_1558}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/988c1e7e-536a-4b20-9617-59e9e23ec72f"
                }}
                style={styles.ImageBackground_0_1559}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1590}>
          <View style={styles.View_0_1589}>
            <View style={styles.View_0_1572}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c09774df-8bc9-4cb7-a939-446b13091411"
                }}
                style={styles.ImageBackground_0_1563}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58662a24-1e72-4087-87cc-1abe5894a043"
                }}
                style={styles.ImageBackground_0_1564}
              />
              <View style={styles.View_0_1571}>
                <View style={styles.View_0_1567}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/625c8e25-3a82-4365-9bea-1b3cbb67bc04"
                    }}
                    style={styles.ImageBackground_0_1565}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32d3d4df-73e5-40be-9c15-43f3392b517e"
                    }}
                    style={styles.ImageBackground_0_1566}
                  />
                </View>
                <View style={styles.View_0_1570}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e48e1df9-28c2-49ee-8239-de73dd1cd0b5"
                    }}
                    style={styles.ImageBackground_0_1568}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfe4d683-1d22-4208-ae39-1a9ea2d1f8d6"
                    }}
                    style={styles.ImageBackground_0_1569}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1584}>
              <View style={styles.View_0_1573}>
                <Text style={styles.Text_0_1573}>2018 Financials</Text>
              </View>
              <View style={styles.View_0_1582}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bba63eb-1fe4-410e-8ff1-d26d9c611217"
                  }}
                  style={styles.ImageBackground_0_1576}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5419ae0e-8e2e-4203-8b6c-94b9ae6958b7"
                  }}
                  style={styles.ImageBackground_0_1579}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3cb3d59-68a3-4b3a-a25d-c2f878054f50"
                  }}
                  style={styles.ImageBackground_0_1580}
                />
                <View style={styles.View_0_1581}>
                  <Text style={styles.Text_0_1581}>38</Text>
                </View>
              </View>
              <View style={styles.View_0_1583}>
                <Text style={styles.Text_0_1583}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.View_0_1588}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/335ec3a9-3f92-4336-a5e2-9fb454861e50"
                }}
                style={styles.ImageBackground_0_1585}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d531819-b59f-4b6a-a217-13f069559c7f"
                }}
                style={styles.ImageBackground_0_1586}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39eddde9-b4cb-4a79-864e-9c503844380e"
                }}
                style={styles.ImageBackground_0_1587}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1618}>
          <View style={styles.View_0_1617}>
            <View style={styles.View_0_1600}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bc6b87b-3aad-479c-9045-285b82471f35"
                }}
                style={styles.ImageBackground_0_1591}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be6fd47f-2ad7-4afe-9d84-35d9acb19f7f"
                }}
                style={styles.ImageBackground_0_1592}
              />
              <View style={styles.View_0_1599}>
                <View style={styles.View_0_1595}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c52c1868-a990-40b8-a091-249e8930439b"
                    }}
                    style={styles.ImageBackground_0_1593}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/779e3de9-8340-4127-ad77-f2da0c435b84"
                    }}
                    style={styles.ImageBackground_0_1594}
                  />
                </View>
                <View style={styles.View_0_1598}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db61bee9-2655-484c-9e6a-584a66d43a0d"
                    }}
                    style={styles.ImageBackground_0_1596}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09a145b0-f604-47a5-afdc-4024497385c6"
                    }}
                    style={styles.ImageBackground_0_1597}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1612}>
              <View style={styles.View_0_1601}>
                <Text style={styles.Text_0_1601}>2018 Financials</Text>
              </View>
              <View style={styles.View_0_1610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c476fcc5-a0f4-4d4d-849e-cd58acb68f89"
                  }}
                  style={styles.ImageBackground_0_1604}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cf70390-09d1-489a-8ee0-6d1775b1fdf0"
                  }}
                  style={styles.ImageBackground_0_1607}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/431c6535-4d11-495e-808a-3e968ee1daa3"
                  }}
                  style={styles.ImageBackground_0_1608}
                />
                <View style={styles.View_0_1609}>
                  <Text style={styles.Text_0_1609}>38</Text>
                </View>
              </View>
              <View style={styles.View_0_1611}>
                <Text style={styles.Text_0_1611}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.View_0_1616}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3a7f7dd-4103-4565-9714-cda60d1a19c0"
                }}
                style={styles.ImageBackground_0_1613}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48dbd7e2-2beb-420f-a615-01fb64b30680"
                }}
                style={styles.ImageBackground_0_1614}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a394a9d-a025-4478-bf97-1b5f6651c0a1"
                }}
                style={styles.ImageBackground_0_1615}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_0_1631}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d46eea87-7329-4cd2-a63a-f1cc640526ce"
          }}
          style={styles.ImageBackground_0_1623}
        />
        <View style={styles.View_0_1624}>
          <View source={{ uri: "null" }} style={styles.View_I0_1624_0_2877} />
          <View style={styles.View_I0_1624_0_2878}>
            <Text style={styles.Text_I0_1624_0_2878}>Shared</Text>
          </View>
          <View style={styles.View_I0_1624_0_2886}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88e37365-eb9c-4276-9717-8551155eb86e"
              }}
              style={styles.ImageBackground_I0_1624_0_2879}
            />
            <View style={styles.View_I0_1624_0_2882}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/babbf291-ecdb-4b44-9829-59c9f6f73a94"
                }}
                style={styles.ImageBackground_I0_1624_0_2880}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c81ff6af-22de-4388-9ce0-7637574f8ce9"
                }}
                style={styles.ImageBackground_I0_1624_0_2881}
              />
            </View>
            <View style={styles.View_I0_1624_0_2885}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ddc1ecd-6db4-4317-a542-fa2a402f8497"
                }}
                style={styles.ImageBackground_I0_1624_0_2883}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/289c44a4-71cc-498c-ac9e-663d29981db8"
                }}
                style={styles.ImageBackground_I0_1624_0_2884}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1625}>
          <View source={{ uri: "null" }} style={styles.View_I0_1625_0_2850} />
          <View style={styles.View_I0_1625_0_2853}>
            <View style={styles.View_I0_1625_0_2851}>
              <Text style={styles.Text_I0_1625_0_2851}>Private</Text>
            </View>
            <View style={styles.View_I0_1625_0_2852}>
              <Text style={styles.Text_I0_1625_0_2852}>Private</Text>
            </View>
          </View>
          <View style={styles.View_I0_1625_0_2856}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47dc3f88-f412-4c3b-84f6-9ce67df69cd8"
              }}
              style={styles.ImageBackground_I0_1625_0_2854}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31d6442f-d700-43f7-b463-480fb2658f9c"
              }}
              style={styles.ImageBackground_I0_1625_0_2855}
            />
          </View>
        </View>
        <View style={styles.View_0_1628}>
          <View source={{ uri: "null" }} style={styles.View_I0_1628_0_2845} />
          <View style={styles.View_I0_1628_0_2846}>
            <Text style={styles.Text_I0_1628_0_2846}>Log</Text>
          </View>
          <View style={styles.View_I0_1628_0_2849}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53b24c72-4b1d-4d92-b81a-73443d075808"
              }}
              style={styles.ImageBackground_I0_1628_0_2847}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a1835d7-17f8-4801-878d-67ff6d3cb9a8"
              }}
              style={styles.ImageBackground_I0_1628_0_2848}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1643}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62e5b686-e89c-4d5a-a5df-080de1f77709"
          }}
          style={styles.ImageBackground_0_1634}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3198bbb-bc6b-469d-a9a4-f4e059a6b893"
          }}
          style={styles.ImageBackground_0_1637}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/102db02c-7664-45d5-b233-523b2e793ea6"
          }}
          style={styles.ImageBackground_0_1640}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6675edec-ca27-48c4-a2da-0eefac0f9b2c"
          }}
          style={styles.ImageBackground_0_1641}
        />
        <View style={styles.View_0_1642}>
          <Text style={styles.Text_0_1642}>3</Text>
        </View>
      </View>
      <View style={styles.View_0_1658}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/deeea82d-efb7-468a-b866-5b5a3f3d1ee2"
          }}
          style={styles.ImageBackground_0_1644}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f41e8770-9022-45be-a604-f210630e4ce1"
          }}
          style={styles.ImageBackground_0_1648}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_0_1652}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_857"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37a8762f-d21e-45f9-947f-ac6f510ac908"
            }}
            style={styles.ImageBackground_0_1649}
          />
          <View style={styles.View_0_1650}>
            <Text style={styles.Text_0_1650}>Search</Text>
          </View>
          <View style={styles.View_0_1651}>
            <View style={styles.View_I0_1651_0_2777}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13240a47-0dd4-4373-a47a-a5973a069496"
                }}
                style={styles.ImageBackground_I0_1651_0_2775}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a217f06b-952f-4181-a83d-651941ae1a68"
                }}
                style={styles.ImageBackground_I0_1651_0_2776}
              />
            </View>
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75198275-53a8-4ba7-9a4e-779a07834b79"
          }}
          style={styles.ImageBackground_0_1654}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f63df5a-6cb7-4f2d-96cb-ab3bfe67f151"
          }}
          style={styles.ImageBackground_0_1657}
        />
      </View>
      <View style={styles.View_0_1671}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e27864a7-1840-4943-8446-eee635d8ee61"
          }}
          style={styles.ImageBackground_0_1659}
        />
        <View style={styles.View_0_1660}>
          <Text style={styles.Text_0_1660}>Shared</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04845d16-c174-4e07-9127-322adbf62e43"
          }}
          style={styles.ImageBackground_0_1664}
        />
        <View style={styles.View_0_1665}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67724478-a857-444c-ad5d-14a36e5f3552"
            }}
            style={styles.ImageBackground_I0_1665_0_3138}
          />
          <View style={styles.View_I0_1665_0_2409}>
            <Text style={styles.Text_I0_1665_0_2409}>Search</Text>
          </View>
          <View style={styles.View_I0_1665_0_3139}>
            <View style={styles.View_I0_1665_0_3139_0_2777}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5d8d148-82dd-447b-bfe7-8d6ff6082c7d"
                }}
                style={styles.ImageBackground_I0_1665_0_3139_0_2775}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/987dc906-5fa5-41aa-bd39-093a5acf8631"
                }}
                style={styles.ImageBackground_I0_1665_0_3139_0_2776}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17646913-5f27-4179-b815-69163c719f0c"
          }}
          style={styles.TouchableOpacity_0_1666}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_886"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b33a09f4-e759-4875-b31e-56c37ca179de"
          }}
          style={styles.ImageBackground_0_1670}
        />
      </View>
      <View style={styles.View_0_1672}>
        <View source={{ uri: "null" }} style={styles.View_I0_1672_0_3062} />
        <View style={styles.View_I0_1672_0_3082}>
          <View style={styles.View_I0_1672_0_3076}>
            <View style={styles.View_I0_1672_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_1672_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e6d9a78-028f-4ce7-b5eb-38a20160635a"
                }}
                style={styles.ImageBackground_I0_1672_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9888487-c05a-4185-93f1-1971758644ee"
                }}
                style={styles.ImageBackground_I0_1672_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f504bbb7-b957-4af6-ad3e-ba29dde84bc1"
              }}
              style={styles.ImageBackground_I0_1672_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86d850ee-e680-41be-8370-0b332182befb"
              }}
              style={styles.ImageBackground_I0_1672_0_3075}
            />
          </View>
          <View style={styles.View_I0_1672_0_3077}>
            <Text style={styles.Text_I0_1672_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c78e2ae2-1ff8-4ec4-a5f7-5e15ea54302c"
            }}
            style={styles.ImageBackground_I0_1672_0_3081}
          />
        </View>
        <View style={styles.View_I0_1672_0_3083}>
          <Text style={styles.Text_I0_1672_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I0_1672_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba4342a6-72ad-462c-a908-e8d82b104ec8"
            }}
            style={styles.ImageBackground_I0_1672_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab2946cb-21e0-4801-9e55-7307790e9d33"
            }}
            style={styles.ImageBackground_I0_1672_0_3092}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("143%") },
  ImageBackground_0_1418: {
    width: wp("100%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1421: {
    width: wp("37%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%")
  },
  ImageBackground_0_1419: {
    width: wp("37%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1420: {
    width: wp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_0_1420: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_1620: {
    width: wp("125%"),
    height: hp("102%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%")
  },
  View_0_1422: {
    width: wp("125%"),
    height: hp("102%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1619: {
    width: wp("125%"),
    height: hp("102%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1450: {
    width: wp("125%"),
    height: hp("102%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1449: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1432: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1423: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1424: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1431: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("6%")
  },
  View_0_1427: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1425: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1426: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1430: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1428: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1429: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1444: {
    width: wp("39%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_0_1433: {
    flexGrow: 1,
    width: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1433: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1442: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_0_1436: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1439: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1440: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_0_1441: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_1441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1443: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1443: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1448: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%")
  },
  ImageBackground_0_1445: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1446: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1447: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1478: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1477: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1460: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1451: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1452: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1459: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("6%")
  },
  View_0_1455: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1453: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1454: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1458: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1456: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1457: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1472: {
    width: wp("50%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_0_1461: {
    flexGrow: 1,
    width: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1461: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1470: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_0_1464: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1467: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1468: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_0_1469: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_1469: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1471: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1471: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1476: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%")
  },
  ImageBackground_0_1473: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1474: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1475: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1506: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1505: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1488: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1479: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1480: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1487: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("6%")
  },
  View_0_1483: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1481: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1482: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1486: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1484: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1485: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1500: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_0_1489: {
    flexGrow: 1,
    width: wp("60%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1489: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1498: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_0_1492: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1495: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1496: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_0_1497: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_1497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1499: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1499: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1504: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%")
  },
  ImageBackground_0_1501: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1502: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1503: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1534: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1533: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1516: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1507: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1508: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1515: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("6%")
  },
  View_0_1511: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1509: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1510: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1514: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1512: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1513: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1528: {
    width: wp("46%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_0_1517: {
    flexGrow: 1,
    width: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1517: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1526: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_0_1520: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1523: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1524: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_0_1525: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_1525: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1527: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1527: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1532: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%")
  },
  ImageBackground_0_1529: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1530: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1531: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1562: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1561: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1544: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1535: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1536: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1543: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("6%")
  },
  View_0_1539: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1537: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1538: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1542: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1540: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1541: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1556: {
    width: wp("45%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_0_1545: {
    flexGrow: 1,
    width: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1545: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1554: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_0_1548: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1551: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1552: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_0_1553: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_1553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1555: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1555: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1560: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%")
  },
  ImageBackground_0_1557: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1558: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1559: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1590: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1589: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1572: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1563: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1564: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1571: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("6%")
  },
  View_0_1567: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1565: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1566: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1570: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1568: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1569: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1584: {
    width: wp("39%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_0_1573: {
    flexGrow: 1,
    width: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1573: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1582: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_0_1576: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1579: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1580: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_0_1581: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_1581: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1583: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1583: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1588: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%")
  },
  ImageBackground_0_1585: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1586: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1587: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1618: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1617: {
    width: wp("106%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1600: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1591: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1592: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1599: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("6%")
  },
  View_0_1595: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1593: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1594: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1598: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_1596: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_1597: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1612: {
    width: wp("39%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_0_1601: {
    flexGrow: 1,
    width: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1601: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1610: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_0_1604: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1607: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1608: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_0_1609: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_1609: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1611: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1611: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1616: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%")
  },
  ImageBackground_0_1613: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1614: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1615: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1631: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1623: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1624: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1624_0_2877: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1624_0_2878: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_1624_0_2878: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1624_0_2886: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1624_0_2879: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1624_0_2882: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1624_0_2880: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1624_0_2881: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1624_0_2885: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1624_0_2883: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1624_0_2884: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1625: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1625_0_2850: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1625_0_2853: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1625_0_2851: {
    width: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1625_0_2851: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1625_0_2852: {
    width: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1625_0_2852: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1625_0_2856: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1625_0_2854: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1625_0_2855: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1628: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1628_0_2845: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1628_0_2846: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_1628_0_2846: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1628_0_2849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1628_0_2847: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1628_0_2848: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_0_1643: {
    width: wp("22%"),
    height: hp("4%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_0_1634: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1637: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1640: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_1641: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_0_1642: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    justifyContent: "flex-start"
  },
  Text_0_1642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1658: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1644: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1648: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  TouchableOpacity_0_1652: {
    width: wp("75%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_0_1649: {
    width: wp("75%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1650: {
    width: wp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_0_1650: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1651: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1651_0_2777: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1651_0_2775: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1651_0_2776: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_0_1654: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_0_1657: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_1671: {
    width: wp("100%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1659: {
    width: wp("100%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1660: {
    width: wp("27%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_1660: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 27,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1664: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_0_1665: {
    width: wp("83%"),
    height: hp("5%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1665_0_3138: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1665_0_2409: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_1665_0_2409: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1665_0_3139: {
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
  View_I0_1665_0_3139_0_2777: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1665_0_3139_0_2775: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1665_0_3139_0_2776: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  TouchableOpacity_0_1666: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_1670: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_1672: {
    width: wp("100%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1672_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1672_0_3082: {
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
  View_I0_1672_0_3076: {
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
  View_I0_1672_0_3067: {
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
  View_I0_1672_0_3063: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1672_0_3066: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1672_0_3065: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1672_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I0_1672_0_3075: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I0_1672_0_3077: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1672_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1672_0_3081: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_1672_0_3083: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_1672_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1672_0_3093: {
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
  ImageBackground_I0_1672_0_3088: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1672_0_3092: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
