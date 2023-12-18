import { formatDate } from '@/utils/date'

let today = formatDate()
let todayTimestamp = new Date().getTime()

Component({
  option: {
    addGlobalClass: true,
    styleIsolation: 'shared'
  },
  data: {
    maxDate: todayTimestamp,
    dateRange: [today, today],
    startDate: today,
    endDate: today,
    currentDate: todayTimestamp,
    activeKey: 'startDate',
    calendarVisible: false
  },
  methods: {
    // 打开日历弹窗
    onOpen() {
      this.setData({
        calendarVisible: true
      })
    },
    // 关闭日历弹窗
    onClose() {
      this.setData({
        calendarVisible: false
      })
    },
    // 确认更新日期
    onConfirm() {
      this.onClose()
      const { startDate, endDate } = this.data
      let dateRange
      if (new Date(startDate).getTime() <= new Date(endDate).getTime()) {
        dateRange = [startDate, endDate]
      } else {
        dateRange = [endDate, startDate]
      }
      this.setData({
        dateRange
      })
      this.triggerEvent('change', { dateRange })
    },
    changeDate({ detail }) {
      const { activeKey } = this.data
      this.setData({
        [activeKey]: formatDate(detail),
        currentDate: detail
      })
    },
    changeDateActive(e) {
      const { active = 'startDate' } = e.currentTarget.dataset
      const timeStamp = new Date(this.data[active]).getTime()
      this.setData({
        activeKey: active,
        currentDate: timeStamp
      })
    }
  }
})