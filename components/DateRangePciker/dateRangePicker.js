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
    toggleCalendar(e) {
      const { visible = false } = e.currentTarget.dataset
      this.setData({
        calendarVisible: visible
      })
      if (!visible) {
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
      }
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