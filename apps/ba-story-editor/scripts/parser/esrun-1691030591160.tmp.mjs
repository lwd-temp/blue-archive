import url from 'node:url'

import { createRequire } from 'node:module'

process.argv = [process.argv[0], ...process.argv.slice(3)]

const fileUrl = url.pathToFileURL('esrun-1691030591160.tmp.mjs')

const require = createRequire(fileUrl)
// parser.ts
const langKeyMap = {
  TextJp: 'jp' /* jp */,
  TextCn: 'zh-CN' /* zhCN */,
  TextEn: 'en' /* en */,
  TextTw: 'zh-TW', /* zhTW */
}
function parseText(raw) {
  const stack = []
  let index = 0
  function h() {
  }
  const tagRe = /\[[/-\w]\]/
  while (index < raw.length) {
    const matched = tagRe.exec(raw)
    if (matched) {
      index = tagRe.lastIndex
      console.log(matched, index)
    }
  }
  return []
}
const test = [
  '[FF6666]\u2026\u2026\u6211\u3005\u306F\u671B\u3080\u3001\u4E03\u3064\u306E[-][ruby=\u306A\u3052][FF6666]\u5606[-][/ruby][FF6666]\u304D\u3092\u3002[-]',
  '[b]\u2026\u2026\u6211\u3005\u306F\u671B\u3080\u3001\u4E03\u3064\u306E\u5606[FF6666]\u304D\u3092\u3002[-][/b]',
]
console.log(parseText(test[0]))
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFyc2VyLnRzIl0sCiAgInNvdXJjZVJvb3QiOiAiQzpcXFVzZXJzXFxub3R5cGVqaWFuZ1xcRG9jdW1lbnRzXFxDb2RlUmVwb3NpdG9yeVxcR2l0aHViUmVwb3NpdG9yeVxcYmx1ZS1hcmNoaXZlXFxhcHBzXFxiYS1zdG9yeS1lZGl0b3JcXHNjcmlwdHNcXHBhcnNlciIsCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IEkxOE5TdHJpbmcsIEpTT05TdG9yeSwgSlNPTlN0b3J5UGxhY2VDb21tYW5kLCBKU09OU3RvcnlUaXRsZUNvbW1hbmQsIFRleHQgfSBmcm9tICdzY3JpcHRzL3N0b3J5J1xuaW1wb3J0IHsgSlNPTlN0b3J5Q29tbWFuZFR5cGUsIExhbmcgfSBmcm9tICdzY3JpcHRzL3N0b3J5J1xuXG4vLyB0b2RvIGRlYnVnXG5jb25zdCBsYW5nS2V5TWFwID0ge1xuICBUZXh0SnA6IExhbmcuanAsXG4gIFRleHRDbjogTGFuZy56aENOLFxuICBUZXh0RW46IExhbmcuZW4sXG4gIFRleHRUdzogTGFuZy56aFRXLFxufVxuXG5lbnVtIE5leG9uU2NyaXB0Q29tbWFuZFR5cGVzIHtcbiAgVGl0bGUgPSAnVGl0bGUnLFxuICBQbGFjZSA9ICdQbGFjZScsXG4gIFdhaXQgPSAnV2FpdCcsXG4gIENoYXJhY3RlciA9ICdDaGFyYWN0ZXInLFxuICBDaGFyYWN0ZXJUYWxrID0gJ0NoYXJhY3RlclRhbGsnLFxuICBOQSA9ICdOQScsXG59XG5cbmNvbnN0IE5leG9uU2NyaXB0Q29tbWFuZFJlZ2V4ID0gW1xuICB7XG4gICAgcmU6IC8jdGl0bGU7KFteO1xcbl0rKTs/KFteO1xcbl0rKT87Py9pLFxuICAgIHR5cGU6IE5leG9uU2NyaXB0Q29tbWFuZFR5cGVzLlRpdGxlLFxuICB9LFxuICB7XG4gICAgcmU6IC8jcGxhY2U7KFteO1xcbl0rKTs/L2ksXG4gICAgdHlwZTogTmV4b25TY3JpcHRDb21tYW5kVHlwZXMuUGxhY2UsXG4gIH0sXG4gIHtcbiAgICByZTogLyNuYTsoW147XFxuXSspOz8oW147XFxuXSspPzs/L2ksXG4gICAgdHlwZTogTmV4b25TY3JpcHRDb21tYW5kVHlwZXMuTkEsXG4gIH0sXG4gIHtcbiAgICByZTogLyN3YWl0OyhcXGQrKTs/L2ksXG4gICAgdHlwZTogTmV4b25TY3JpcHRDb21tYW5kVHlwZXMuV2FpdCxcbiAgfSxcbiAge1xuICAgIHJlOiAvXig/ISMpKFsxLTVdKTsoW147XFxuXSspOyhbXjtcXG5dKyk7PyhbXjtcXG5dKyk/LyxcbiAgICB0eXBlOiBOZXhvblNjcmlwdENvbW1hbmRUeXBlcy5DaGFyYWN0ZXJUYWxrLFxuICB9LFxuICB7XG4gICAgcmU6IC8jKFsxLTVdKTsoKChlbXxmeCk7KFteO1xcbl0rKSl8XFx3Kyk7Py8sXG4gICAgdHlwZTogTmV4b25TY3JpcHRDb21tYW5kVHlwZXMuQ2hhcmFjdGVyLFxuICB9LFxuXVxuXG50eXBlIE5leG9uQ29tbWFuZFVuaXQgPSB7XG4gIGFyZ3M6IHN0cmluZ1tdXG4gIHJhdzogc3RyaW5nIC8vIHJhdyBsaW5lXG4gIHNjcmlwdDogc3RyaW5nIC8vIFNjcmlwdEtyXG4gIHRhZz86IG51bWJlciAvLyBlcXVhbHMgbWV0YS5TZWxlY3Rpb25Hcm91cFxuICBtZXRhOiB7XG4gICAgU2VsZWN0aW9uR3JvdXA/OiBudW1iZXJcbiAgICBCR01JZD86IG51bWJlclxuICAgIFNvdW5kPzogc3RyaW5nXG4gICAgVHJhbnNpdGlvbj86IG51bWJlclxuICAgIEJHTmFtZT86IG51bWJlclxuICAgIEJHRWZmZWN0PzogbnVtYmVyXG4gICAgUG9wdXBGaWxlTmFtZT86IHN0cmluZ1xuICAgIFRleHRKcD86IHN0cmluZ1xuICAgIFRleHRDbj86IHN0cmluZ1xuICAgIFRleHRUdz86IHN0cmluZ1xuICAgIFRleHRFbj86IHN0cmluZ1xuICAgIFZvaWNlSnA/OiBzdHJpbmdcbiAgfVxufSAmIChcbiAge1xuICAgIHR5cGU6IE5leG9uU2NyaXB0Q29tbWFuZFR5cGVzLlRpdGxlXG4gICAgdGl0bGU6IEkxOE5TdHJpbmdcbiAgICBzdWJ0aXRsZT86IEkxOE5TdHJpbmdcbiAgfSB8IHtcbiAgICB0eXBlOiBOZXhvblNjcmlwdENvbW1hbmRUeXBlcy5QbGFjZVxuICAgIHZhbHVlOiBJMThOU3RyaW5nXG4gIH0gfCB7XG4gICAgdHlwZTogTmV4b25TY3JpcHRDb21tYW5kVHlwZXMuV2FpdFxuICAgIG1pbGxpb25TZWNvbmQ6IG51bWJlclxuICB9IHwge1xuICAgIHR5cGU6IE5leG9uU2NyaXB0Q29tbWFuZFR5cGVzLkNoYXJhY3RlciAvLyBDaGFyYWN0ZXJFZmZlY3RcbiAgICBwb3NpdGlvbjogMSB8IDIgfCAzIHwgNCB8IDVcbiAgICBlbW90aW9uPzogc3RyaW5nIC8vIHBvcHVwIFx1ODg2OFx1NjBDNVxuICAgIGZ4Pzogc3RyaW5nXG4gICAgZWZmZWN0Pzogc3RyaW5nXG4gIH0gfCB7XG4gICAgdHlwZTogTmV4b25TY3JpcHRDb21tYW5kVHlwZXMuQ2hhcmFjdGVyVGFsa1xuICAgIHBvc2l0aW9uOiAxIHwgMiB8IDMgfCA0IHwgNVxuICAgIHNwZWFrZXI6IHN0cmluZ1xuICAgIGNvbnRlbnQ/OiBJMThOU3RyaW5nXG4gICAgZmFjZTogc3RyaW5nIC8vIFx1NEVGQlx1NTJBMVx1OTc2Mlx1OTBFOFx1ODg2OFx1NjBDNVxuICB9IHwge1xuICAgIHR5cGU6IE5leG9uU2NyaXB0Q29tbWFuZFR5cGVzLk5BXG4gICAgc3BlYWtlcj86IHN0cmluZ1xuICAgIGNvbnRlbnQ6IEkxOE5TdHJpbmdcbiAgfVxuKVxudHlwZSBOZXhvbkNvbW1hbmRVbml0VDxUIGV4dGVuZHMgTmV4b25TY3JpcHRDb21tYW5kVHlwZXM+ID0gTmV4b25Db21tYW5kVW5pdCAmIHsgdHlwZTogVCB9XG5cbmZ1bmN0aW9uIGJ1aWxkTmV4b25Db21tYW5kTWV0YUluZm8odGV4dDogc3RyaW5nKTogTmV4b25Db21tYW5kVW5pdFsnbWV0YSddIHtcbiAgY29uc3QgcmVzdWx0OiBOZXhvbkNvbW1hbmRVbml0WydtZXRhJ10gPSB7fVxuICB0ZXh0LnNwbGl0KC9cXHNALykuZm9yRWFjaCgoZWFjaCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWQgPSAvQD8oW149XFxuXFxcIlxcJ10rKT0oOj9cXFwifFxcJykoLio/KVxcMi8uZXhlYyhlYWNoKVxuICAgIGlmICghbWF0Y2hlZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4b24gbWV0YSBpbmZvIGZvcm1hdCBlcnJvcjogJHtlYWNofWApXG4gICAgUmVmbGVjdC5zZXQocmVzdWx0LCBtYXRjaGVkWzFdLCBtYXRjaGVkWzNdKVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSTE4TlN0cmluZ1V0aWwobWV0YUluZm86IE5leG9uQ29tbWFuZFVuaXRbJ21ldGEnXSwgdGV4dEtyOiBzdHJpbmcpOiBJMThOU3RyaW5nIHtcbiAgY29uc3QgaTE4TlN0cmluZzogSTE4TlN0cmluZyA9IHsgW0xhbmcua3JdOiB0ZXh0S3IgfVxuICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhsYW5nS2V5TWFwKSkge1xuICAgIGlmIChSZWZsZWN0LmhhcyhtZXRhSW5mbywgaykpIHtcbiAgICAgIGNvbnN0IGxhbmdUZXh0ID0gU3RyaW5nKFJlZmxlY3QuZ2V0KG1ldGFJbmZvLCBrKSlcbiAgICAgIFJlZmxlY3Quc2V0KGkxOE5TdHJpbmcsIHYsIGxhbmdUZXh0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gaTE4TlN0cmluZ1xufVxuXG5mdW5jdGlvbiBidWlsZE5leG9uQ29tbWFuZFVuaXQocmF3OiBzdHJpbmcpOiBOZXhvbkNvbW1hbmRVbml0IHtcbiAgbGV0IG1ldGFJbmZvOiBOZXhvbkNvbW1hbmRVbml0WydtZXRhJ10gPSB7fVxuICBsZXQgc2NyaXB0OiBzdHJpbmcgPSByYXdcbiAgY29uc3QgbWF0Y2hlZCA9IHJhdy5tYXRjaCgvKD8hXFxcXClALylcblxuICAvLyBcdTU5MDRcdTc0MDYgYEBgIFx1NTQwRVx1OTc2Mlx1NzY4NFx1NUI1N1x1N0IyNlx1NEUzMlxuICBpZiAobWF0Y2hlZCAmJiBtYXRjaGVkLmluZGV4KSB7XG4gICAgLy8gYnVpbGQgbWV0YSBpbmZvXG4gICAgbWV0YUluZm8gPSBidWlsZE5leG9uQ29tbWFuZE1ldGFJbmZvKHJhdy5zdWJzdHJpbmcobWF0Y2hlZC5pbmRleCkpXG4gICAgc2NyaXB0ID0gcmF3LnN1YnN0cmluZygwLCBtYXRjaGVkLmluZGV4IC0gMSlcbiAgfVxuICAvLyBcdTU5MDRcdTc0MDYgYDpgIFx1NTI0RFx1OTc2Mlx1NzY4NFx1NUI1N1x1N0IyNlx1NEUzMlxuICBjb25zdCBjb2xvbkluZGV4ID0gcmF3LmluZGV4T2YoJzonKVxuICBpZiAoY29sb25JbmRleCAhPT0gLTEpXG4gICAgbWV0YUluZm8uU2VsZWN0aW9uR3JvdXAgPSBOdW1iZXIocmF3LnN1YnN0cmluZygwLCBjb2xvbkluZGV4KSlcblxuICAvLyBcdTU5MDRcdTc0MDYgYFNjcmlwdEtyYFxuICBmb3IgKGNvbnN0IHsgcmUsIHR5cGUgfSBvZiBOZXhvblNjcmlwdENvbW1hbmRSZWdleCkge1xuICAgIGNvbnN0IG1hdGNoZWQgPSByZS5leGVjKHNjcmlwdClcbiAgICBpZiAoIW1hdGNoZWQpXG4gICAgICBjb250aW51ZVxuXG4gICAgY29uc3QgdGVtcCA9IHtcbiAgICAgIG1ldGE6IG1ldGFJbmZvLCByYXcsIHNjcmlwdCwgYXJnczogQXJyYXkuZnJvbShtYXRjaGVkKSwgdGFnOiBtZXRhSW5mby5TZWxlY3Rpb25Hcm91cCA/PyB1bmRlZmluZWQsXG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBOZXhvblNjcmlwdENvbW1hbmRUeXBlcy5UaXRsZToge1xuICAgICAgICBjb25zdCBpMThOVGl0bGU6IEkxOE5TdHJpbmcgPSB7fVxuICAgICAgICBjb25zdCBpMThOU3VidGl0bGU6IEkxOE5TdHJpbmcgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhsYW5nS2V5TWFwKSkge1xuICAgICAgICAgIGlmIChSZWZsZWN0LmhhcyhtZXRhSW5mbywgaykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhbmdUZXh0ID0gU3RyaW5nKFJlZmxlY3QuZ2V0KG1ldGFJbmZvLCBrKSlcbiAgICAgICAgICAgIGNvbnN0IFt0aXRsZVRleHQsIHN1YnRpdGxlVGV4dF0gPSBsYW5nVGV4dC5zcGxpdCgnOycpXG4gICAgICAgICAgICBSZWZsZWN0LnNldChpMThOVGl0bGUsIHYsIHRpdGxlVGV4dClcbiAgICAgICAgICAgIHN1YnRpdGxlVGV4dCA/PyBSZWZsZWN0LnNldChpMThOU3VidGl0bGUsIHYsIHN1YnRpdGxlVGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaTE4TlRpdGxlW0xhbmcua3JdID0gbWF0Y2hlZFsxXVxuICAgICAgICBpMThOU3VidGl0bGVbTGFuZy5rcl0gPSBtYXRjaGVkWzJdXG4gICAgICAgIHJldHVybiB7IHR5cGUsIC4uLnRlbXAsIHRpdGxlOiBpMThOVGl0bGUsIHN1YnRpdGxlOiBpMThOU3VidGl0bGVbTGFuZy5rcl0gPyBpMThOU3VidGl0bGUgOiB1bmRlZmluZWQgfVxuICAgICAgfVxuICAgICAgY2FzZSBOZXhvblNjcmlwdENvbW1hbmRUeXBlcy5QbGFjZToge1xuICAgICAgICByZXR1cm4geyB0eXBlLCAuLi50ZW1wLCB2YWx1ZTogYnVpbGRJMThOU3RyaW5nVXRpbChtZXRhSW5mbywgbWF0Y2hlZFsxXSkgfVxuICAgICAgfVxuICAgICAgY2FzZSBOZXhvblNjcmlwdENvbW1hbmRUeXBlcy5XYWl0OiB7XG4gICAgICAgIHJldHVybiB7IHR5cGUsIC4uLnRlbXAsIG1pbGxpb25TZWNvbmQ6IE51bWJlcihtYXRjaGVkWzFdKSB9XG4gICAgICB9XG4gICAgICBjYXNlIE5leG9uU2NyaXB0Q29tbWFuZFR5cGVzLkNoYXJhY3Rlcjoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgLi4udGVtcCxcbiAgICAgICAgICBwb3NpdGlvbjogTnVtYmVyKG1hdGNoZWRbMV0pIGFzIDEgfCAyIHwgMyB8IDQgfCA1LFxuICAgICAgICAgIGVtb3Rpb246IG1hdGNoZWRbNF0gPT09ICdlbScgPyBtYXRjaGVkWzVdIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZ4OiBtYXRjaGVkWzRdID09PSAnZngnID8gbWF0Y2hlZFs1XSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBlZmZlY3Q6IG1hdGNoZWQubGVuZ3RoID09PSAyID8gbWF0Y2hlZFsyXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBOZXhvblNjcmlwdENvbW1hbmRUeXBlcy5DaGFyYWN0ZXJUYWxrOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAuLi50ZW1wLFxuICAgICAgICAgIHBvc2l0aW9uOiBOdW1iZXIobWF0Y2hlZFsxXSkgYXMgMSB8IDIgfCAzIHwgNCB8IDUsXG4gICAgICAgICAgc3BlYWtlcjogbWF0Y2hlZFsyXSxcbiAgICAgICAgICBmYWNlOiBtYXRjaGVkWzNdLFxuICAgICAgICAgIGNvbnRlbnQ6IG1hdGNoZWRbNF0gPyBidWlsZEkxOE5TdHJpbmdVdGlsKG1ldGFJbmZvLCBtYXRjaGVkWzRdKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBOZXhvblNjcmlwdENvbW1hbmRUeXBlcy5OQToge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWF0Y2hlZFsyXSA/IG1hdGNoZWRbMl0gOiBtYXRjaGVkWzFdXG4gICAgICAgIHJldHVybiB7IHR5cGUsIC4uLnRlbXAsIHNwZWFrZXI6IG1hdGNoZWRbMl0gPyBtYXRjaGVkWzFdIDogdW5kZWZpbmVkLCBjb250ZW50OiBidWlsZEkxOE5TdHJpbmdVdGlsKG1ldGFJbmZvLCBjb250ZW50KSB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgcGFyc2UgQ29tbWFuZCBVbml0OiBcIiR7cmF3fVwiYClcbn1cblxuaW50ZXJmYWNlIFBhcnNlckhhbmRsZXIge1xuICAodW5pdDogTmV4b25Db21tYW5kVW5pdCk6IHZvaWRcbn1cblxuZnVuY3Rpb24gcGFyc2VUZXh0KHJhdzogc3RyaW5nKTogVGV4dFtdIHtcbiAgY29uc3Qgc3RhY2sgPSBbXVxuICBsZXQgaW5kZXggPSAwXG4gIGZ1bmN0aW9uIGgoKSB7XG5cbiAgfVxuICBjb25zdCB0YWdSZSA9IC9cXFtbLy1cXHddXFxdL1xuICB3aGlsZSAoaW5kZXggPCByYXcubGVuZ3RoKSB7XG4gICAgY29uc3QgbWF0Y2hlZCA9IHRhZ1JlLmV4ZWMocmF3KVxuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICBpbmRleCA9IHRhZ1JlLmxhc3RJbmRleFxuICAgICAgY29uc29sZS5sb2cobWF0Y2hlZCwgaW5kZXgpXG4gICAgfVxuICB9XG4gIHJldHVybiBbXVxufVxuXG4vKiogcGFyc2UgTmV4b25TY3JpcHQoc3RyaW5nKSAvIE5leG9uSlNPTlN0b3J5KGpzb24pIHRvIEpTT05TdG9yeSAqL1xuY2xhc3MgTmV4b25TY3JpcHRQYXJzZXIge1xuICBwdWJsaWMgbmV4b25TY3JpcHQ/OiBzdHJpbmdcbiAgcHVibGljIHVuaXRzOiBOZXhvbkNvbW1hbmRVbml0W11cbiAgcHVibGljIGdyb3VwSWQ6IG51bWJlclxuICBwdWJsaWMgaW5kZXggPSAwXG5cbiAgcHVibGljIHJlc3VsdDogSlNPTlN0b3J5Wydjb250ZW50J10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKGdyb3VwSWQ6IG51bWJlciwgb2JqOiBzdHJpbmcpXG4gIGNvbnN0cnVjdG9yKGdyb3VwSWQ6IG51bWJlciwgb2JqOiBOZXhvbkNvbW1hbmRVbml0W10pXG4gIGNvbnN0cnVjdG9yKGdyb3VwSWQ6IG51bWJlciwgb2JqOiBzdHJpbmcgfCBOZXhvbkNvbW1hbmRVbml0W10pIHtcbiAgICB0aGlzLmdyb3VwSWQgPSBncm91cElkXG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubmV4b25TY3JpcHQgPSBvYmpcbiAgICAgIHRoaXMudW5pdHMgPSBbXVxuICAgICAgb2JqLnNwbGl0KCdcXG4nKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy51bml0cy5wdXNoKGJ1aWxkTmV4b25Db21tYW5kVW5pdChsaW5lLnRyaW0oKSkpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUud2FybigoZXJyIGFzIEVycm9yKS5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudW5pdHMgPSBvYmpcbiAgICB9XG4gIH1cblxuICBwYXJzZSgpIHtcbiAgICBmb3IgKHRoaXMuaW5kZXggPSAwOyB0aGlzLmluZGV4IDwgdGhpcy51bml0cy5sZW5ndGg7IHRoaXMuaW5kZXgrKylcbiAgICAgIHRoaXMucGFyc2VDb21tYW5kVW5pdCh0aGlzLnVuaXRzW3RoaXMuaW5kZXhdKVxuICAgIHJldHVybiB0aGlzLnJlc3VsdFxuICB9XG5cbiAgcGFyc2VDb21tYW5kVW5pdCh1bml0OiBOZXhvbkNvbW1hbmRVbml0KSB7XG4gICAgY29uc3QgcGFyc2VIYW5kbGVyTmFtZSA9IGBwYXJzZSR7dW5pdC50eXBlfUNvbW1hbmRVbml0YFxuICAgIGlmIChSZWZsZWN0Lmhhcyh0aGlzLCBwYXJzZUhhbmRsZXJOYW1lKSlcbiAgICAgIHZvaWQgKFJlZmxlY3QuZ2V0KHRoaXMsIHBhcnNlSGFuZGxlck5hbWUpIGFzIFBhcnNlckhhbmRsZXIpLmNhbGwodGhpcywgdW5pdClcbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGZpbmQgcGFyc2UgaGFuZGxlcjogJHtwYXJzZUhhbmRsZXJOYW1lfWApXG4gIH1cblxuICBwYXJzZVRpdGxlQ29tbWFuZFVuaXQodW5pdDogTmV4b25Db21tYW5kVW5pdFQ8TmV4b25TY3JpcHRDb21tYW5kVHlwZXMuVGl0bGU+KSB7XG4gICAgY29uc3QgcmVzdWx0OiBKU09OU3RvcnlUaXRsZUNvbW1hbmQgPSB7XG4gICAgICB0eXBlOiBKU09OU3RvcnlDb21tYW5kVHlwZS5UaXRsZSxcbiAgICAgIHRpdGxlOiBwYXJzZVRleHQodW5pdC50aXRsZSksXG4gICAgICBzdWJ0aXRsZTogdW5pdC5zdWJ0aXRsZSA/IHBhcnNlVGV4dCh1bml0LnN1YnRpdGxlKSA6IHVuZGVmaW5lZCxcbiAgICB9XG4gICAgdGhpcy5yZXN1bHQucHVzaChyZXN1bHQpXG4gIH1cblxuICBwYXJzZVBsYWNlQ29tbWFuZFVuaXQodW5pdDogTmV4b25Db21tYW5kVW5pdFQ8TmV4b25TY3JpcHRDb21tYW5kVHlwZXMuUGxhY2U+KSB7XG4gICAgY29uc3QgcmVzdWx0OiBKU09OU3RvcnlQbGFjZUNvbW1hbmQgPSB7XG4gICAgICB0eXBlOiBKU09OU3RvcnlDb21tYW5kVHlwZS5QbGFjZSxcbiAgICAgIHBsYWNlOiBwYXJzZVRleHQodW5pdC52YWx1ZSksXG4gICAgfVxuICAgIHRoaXMucmVzdWx0LnB1c2gocmVzdWx0KVxuICB9XG5cbiAgcGFyc2VXYWl0Q29tbWFuZFVuaXQodW5pdDogTmV4b25Db21tYW5kVW5pdCkgeyB9XG4gIHBhcnNlQ2hhcmFjdGVyQ29tbWFuZFVuaXQodW5pdDogTmV4b25Db21tYW5kVW5pdCkgeyB9XG4gIHBhcnNlQ2hhcmFjdGVyVGFsa0NvbW1hbmRVbml0KHVuaXQ6IE5leG9uQ29tbWFuZFVuaXQpIHsgfVxuICBwYXJzZU5BQ29tbWFuZFVuaXQodW5pdDogTmV4b25Db21tYW5kVW5pdCkgeyB9XG59XG5cbi8vIHRlc3Rcbi8vIGF3YWl0IChhc3luYyBmdW5jdGlvbiBtYWluKCkge1xuLy8gICBjb25zdCBuZXhvblNjcmlwdCA9IGJ1aWxkTmV4b25TY3JpcHQoeXV1a2EpXG4vLyAgIGNvbnNvbGUubG9nKG5leG9uU2NyaXB0KVxuLy8gICAvLyBjb25zdCBuZXhvblNjcmlwdExpbmVzID0gbmV4b25TY3JpcHQuc3BsaXQoJ1xcbicpLm1hcChsaW5lID0+IGxpbmUudHJpbSgpKVxuLy8gICAvLyBjb25zb2xlLmxvZyhidWlsZE5leG9uQ29tbWFuZFVuaXQobmV4b25TY3JpcHRMaW5lc1syOF0pKVxuLy8gICBjb25zdCBwYXJzZXIgPSBuZXcgTmV4b25TY3JpcHRQYXJzZXIoMSwgbmV4b25TY3JpcHQpXG4vLyAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5wYXJzZSgpXG4vLyAgIGNvbnNvbGUubG9nKHJlc3VsdClcbi8vIH0pKClcblxuLy8gdGVzdCBwYXJzZXJUZXh0XG5jb25zdCB0ZXN0ID0gW1xuICAnW0ZGNjY2Nl1cdTIwMjZcdTIwMjZcdTYyMTFcdTMwMDVcdTMwNkZcdTY3MUJcdTMwODBcdTMwMDFcdTRFMDNcdTMwNjRcdTMwNkVbLV1bcnVieT1cdTMwNkFcdTMwNTJdW0ZGNjY2Nl1cdTU2MDZbLV1bL3J1YnldW0ZGNjY2Nl1cdTMwNERcdTMwOTJcdTMwMDJbLV0nLFxuICAnW2JdXHUyMDI2XHUyMDI2XHU2MjExXHUzMDA1XHUzMDZGXHU2NzFCXHUzMDgwXHUzMDAxXHU0RTAzXHUzMDY0XHUzMDZFXHU1NjA2W0ZGNjY2Nl1cdTMwNERcdTMwOTJcdTMwMDJbLV1bL2JdJyxcbl1cblxuY29uc29sZS5sb2cocGFyc2VUZXh0KHRlc3RbMF0pKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUlBLElBQU0sYUFBYTtBQUFBLEVBQ2pCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUE4TEEsU0FBUyxVQUFVLEtBQXFCO0FBQ3RDLFFBQU0sUUFBUSxDQUFDO0FBQ2YsTUFBSSxRQUFRO0FBQ1osV0FBUyxJQUFJO0FBQUEsRUFFYjtBQUNBLFFBQU0sUUFBUTtBQUNkLFNBQU8sUUFBUSxJQUFJLFFBQVE7QUFDekIsVUFBTSxVQUFVLE1BQU0sS0FBSyxHQUFHO0FBQzlCLFFBQUksU0FBUztBQUNYLGNBQVEsTUFBTTtBQUNkLGNBQVEsSUFBSSxTQUFTLEtBQUs7QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFDQSxTQUFPLENBQUM7QUFDVjtBQWtGQSxJQUFNLE9BQU87QUFBQSxFQUNYO0FBQUEsRUFDQTtBQUNGO0FBRUEsUUFBUSxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
