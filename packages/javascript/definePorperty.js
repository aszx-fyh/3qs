// <el-date-picker type='daterange' v-model="date" @change="change"></el-date-picker>
// <el-date-picker type='daterange' :value='date' @input='change' ></el-date-picker>
// <el-dialog :visible.sync='visible'></el-dialog>
// <el-dialog :visible='visible' @update:visible='changeXXX' ></el-dialog>
const component = {
  data() {
    return {
      startTime: '',
      endTime: '',
      // date: ['3','3'],
      visible: false,
    }
  },
  computed: {
    date: {
      get() {
        return [this.startTime, this.endTime]
      },
      set(val) {
        this.change(val)
      },
    },
  },
  methods: {
    change(value) {
      // value是数组,['2020-11-01','2020-12-01']
    },
  },
}

const person = {
  firstName: 'fang',
  lastName: 'yh',
  get fullName() {
    return this.firstName + '||' + this.lastName
  },
  set fullName(val) {
    this.firstName = 'yang'
    this.lastName = 'ggg'
  },
  getFullName() {
    console.log('fullName:', this.firstName, this.lastName, this.fullName)
  },
  province: '',
  city: '',
}
person.getFullName()
person.fullName = 'gggg'
person.getFullName()

Object.defineProperty(person, 'address', {
  // value: 44,
  // writable:true,
  get() {
    return this.province + '||' + this.city
  },
  set(val) {
    this.province = '台湾'
    this.city = '高雄'
  },
})

console.log(person)
