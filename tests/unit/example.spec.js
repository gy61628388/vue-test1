// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
function add(num1,num2){
  return num1 + num2
}

describe('加法测试',()=>{
  it('数字相加',()=>{
    expect(add(1,2)).toBe(2)
  })
})