import fs from "fs";

const path = process.argv[2];
// 备份原文件
const backupPath = path + ".bak";
// 3. 增强备份逻辑（不要覆盖已有的备份）
if (!fs.existsSync(backupPath)) {
  fs.cpSync(path, backupPath);
}

if (process.argv.includes("reset")) {
  if (fs.existsSync(backupPath)) {
    try {
      // 将备份文件覆盖回原文件
      fs.copyFileSync(backupPath, path);
      // 可选：还原后删除备份文件，保持环境整洁
      // fs.unlinkSync(backupPath);
      console.log("[INFO] ✅ 已从备份文件还原成功");
    } catch (err) {
      console.error("[ERROR] 还原失败:", err.message);
    }
  } else {
    console.warn("[WARN] ⚠️ 未发现备份文件 (.bak)，无法自动还原。");
  }
  console.log("[INFO] ✅ 以还原");
  process.exit(0);
}

// 读取上面的内容
let content = fs.readFileSync(path, "utf8");

content = content
  .replace(`to focus or unfocus Claude`, `聚焦或取消聚焦 Claude 窗口`)
  .replace(`"Ask before edits"`, `"修改前询问"`)
  .replace(`"Edit automatically"`, `"自动编辑"`)
  .replace(`"Plan mode"`, `"计划模式"`)
  .replace(
    `Tired of repeating yourself? Tell Claude to remember what you\\u2019ve told it using CLAUDE.md.`,
    `无需重复指令。通过 CLAUDE.md 记录已知信息，让 Claude 拥有持久记忆。`,
  )
  .replace(`"Ready to code?"`, `"准备好开始写代码了吗？"`)
  .replace(
    `"Let's write something worth deploying."`,
    `"别写烂代码了，写点能跑上线的吧。"`,
  )
  .replace(
    `"// TODO: Everything. Let\\u2019s start."`,
    `"// TODO: 万事待兴。开始吧。"`,
  )
  .replace(
    `"Type /model to pick the right tool for the job."`,
    `"输入 /model，为当前任务选择合适的工具。"`,
  )
  .replace(
    `"Use planning mode to talk through big changes before a commit. Press"`,
    `"在提交代码前，使用计划模式讨论重大变更。按下"`,
  )
  .replace(`"to cycle between modes."`, `"以切换模式。"`)
  .replace(`"Highlight any text and press"`, `"选中文本并按下"`)
  .replace(`"to chat about it"`, `"来讨论它。"`)
  .replace(
    `"Make a CLAUDE.md file for instructions Claude will read every single time."`,
    `"创建一个 CLAUDE.md 文件，用于存放 Claude 每次都会读取的指令。"`,
  )
  .replace(
    `"You\\u2019ve come to the absolutely right place!"`,
    `"你绝对找对地方了！"`,
  )
  .replace(`"Prefer the Terminal experience?"`, `"更倾向于终端体验？"`)
  .replace(`"Switch back in Settings."`, `"可在设置中切回。"`)
  .replace(`"Files & Folders"`, `"文件和文件夹"`)
  .replace(`"Remote server is not connected"`, `"远程服务器未连接"`)
  .replace(`"Filter actions\\u2026"`, `"过滤操作..."`)
  .replace(`"No matching commands"`, `"没有匹配的指令"`)
  .replace(`"Attach file\\u2026"`, `"添加文件..."`)
  .replace(`"Mention file from this project\\u2026"`, `"引用此项目中的文件..."`)
  .replace(`"MCP status"`, `"MCP 状态"`)
  .replace(`"Manage plugins"`, `"管理插件"`)
  .replace(`"General config\\u2026"`, `"通用配置..."`)
  .replace(
    `"Open Claude Code Extension configuration"`,
    `"打开 Claude Code 扩展配置"`,
  )
  .replace(`"View help docs"`, `"查看帮助文档"`)
  .replace(`"Open help documentation"`, `"打开帮助文档"`)
  .replace(`"Open Claude in Terminal"`, `"在终端中打开 Claude"`)
  .replace(
    `"Open a new Claude instance in the Terminal"`,
    `"在终端中开启新的 Claude 实例"`,
  )
  .replaceAll(`"Thinking"`, `"深度思考"`)
  .replace(`"Extended thinking is on"`, `"深度思考已开启"`)
  .replace(`"Extended thinking is off"`, `"深度思考已关闭"`)
  .replace(`"Drop to attach as context"`, `"拖拽至此作为上下文引用"`)
  .replace(`"Loading..."`, `"加载中..."`)
  .replace(`"Account & Usage"`, `"账户与用量"`)
  .replace(`"Account & usage\\u2026"`, `"账户与用量..."`)
  .replace(`"Switch model\\u2026"`, `"切换模型..."`)
  .replace(`"Ask Claude for help"`, `"向 Claude 寻求帮助"`)
  .replace(`"Queue another message\\u2026"`, `"排队发送下一条消息..."`)
  .replace(`to attach selected text`, `以附加选中文本`)
  .replace(`to focus or unfocus Claude`, `以聚焦或取消聚焦 Claude 窗口`)
  .replace(`"Ask Claude to edit\\u2026"`, `"请求 Claude 进行编辑..."`)
  .replace(`"Plugins"`, `"插件"`)
  .replace(`"Continue in Terminal to manage plugins?"`, `"前往终端管理插件？"`)
  .replace(
    `"After installing plugins, reload this extension to use them here."`,
    `"安装插件后，请重新加载扩展以在此使用。"`,
  )
  .replaceAll(`"Manage MCP servers"`, `"管理 MCP 服务器"`)
  .replace(`"Output styles"`, `"输出样式"`)
  .replace(
    `"Continue in Terminal to change output style?"`,
    `"前往终端更改输出样式？"`,
  )
  .replace(
    `"After changing your output style in Terminal and reloading this extension, you'll be able to use it here."`,
    `"在终端修改输出样式并重载扩展后，即可在此生效。"`,
  )
  .replace(`"Agents"`, `"智能体 (Agents)"`)
  .replace(
    `"Continue in Terminal to configure agents?"`,
    `"前往终端配置智能体？"`,
  )
  .replace(
    `"Once agents are configured in Terminal, you can reload this extension and ask Claude to use them here."`,
    `"在终端配置完成后，重载扩展即可在此调用智能体。"`,
  )
  .replace(`"Hooks"`, `"钩子 (Hooks)"`)
  .replace(
    `"Continue in Terminal to configure hooks?"`,
    `"前往终端配置 Hooks？"`,
  )
  .replace(
    `"Once hooks are configured in this repository, they'll be active in your IDE, too."`,
    `"在此仓库配置 Hooks 后，它们也会在 IDE 中生效。"`,
  )
  .replace(`"Memory"`, `"记忆 (Memory)"`)
  .replace(`"Continue in Terminal to edit memory?"`, `"前往终端编辑记忆内容？"`)
  .replace(
    `"Once configured, memories will be picked up by Claude Code here in your IDE."`,
    `"配置完成后，Claude Code 将在 IDE 中同步你的记忆内容。"`,
  )
  .replace(`"Permissions"`, `"权限管理"`)
  .replace(
    `"Continue in Terminal to manage permissions?"`,
    `"前往终端管理权限？"`,
  )
  .replace(
    `"Permission settings are shared between Terminal and this IDE."`,
    `"权限设置在终端与 IDE 之间共享。"`,
  )
  .replace(`"Loading MCP servers\\u2026"`, `"正在加载 MCP 服务器..."`)
  .replace(`"No running MCP servers."`, `"没有运行中的 MCP 服务器。"`)
  .replace(`"Clear conversation"`, `"清空对话"`)
  .replace(`"New conversation"`, `"新建对话"`)
  .replaceAll(`"Untitled"`, `"无标题"`)
  .replaceAll(`"Search sessions\\u2026"`, `"搜索会话..."`)
  .replace(`"Resume conversation"`, `"恢复对话"`)
  .replace(`"Switch account"`, `"切换账户"`)
  .replace(`"Flag model behavior (internal)"`, `"标记模型行为 (内部)"`)
  .replace(
    `"Report model issues to the research team"`,
    `"向研究团队报告模型问题"`,
  )
  .replace(`"Share with team (internal)"`, `"分享给团队 (内部)"`)
  .replace(`"Share conversation with team members"`, `"与团队成员分享对话"`)
  .replace(`"Reset onboarding [internal]"`, `"重置新手引导 [内部]"`)
  .replace(`"Report a problem"`, `"报告问题"`)
  .replace(`"Show command menu (/)"`, `"显示命令菜单 (/)"`)
  .replace(`"Adding\\u2026"`, `"正在添加..."`)
  .replace(`"Add"`, `"添加"`)
  .replace(
    `"No marketplaces configured. Add one above to discover plugins."`,
    `"尚未配置市场。请在上方添加一个市场以探索插件。"`,
  )
  .replaceAll(`"Press"`, `"按下"`)
  .replace(`"to automatically approve code edits"`, `"以自动批准代码修改"`)
  .replace(
    `"Use Claude Code in the terminal to configure MCP servers. They\\u2019ll work here, too!"`,
    `"在终端中使用 Claude Code 配置 MCP 服务器，设置也会在此处生效！"`,
  )
  .replaceAll(`"Past conversations"`, `"历史对话"`)
  .replace(`"New session"`, `"开启新会话"`)
  .replace(`Claude is requesting permission to use`, `Claude 正在请求使用权限`)
  .replace(`"User cancelled the edit"`, `"用户取消了编辑"`)
  .replace(`"User cancelled the write"`, `"用户取消了写入"`)
  .replace(
    `"Claude will edit your selected text or the whole file. Click, or press Shift+Tab, to switch modes."`,
    `"Claude 将编辑选中的文本或整个文件。点击或按 Shift+Tab 切换模式。"`,
  )
  .replace(
    `"Claude will explore the code and present a plan before editing. Click, or press Shift+Tab, to switch modes."`,
    `"Claude 将探索代码并在编辑前提供方案。点击或按 Shift+Tab 切换模式。"`,
  )
  .replace(
    `"Claude Code will not ask for your approval before running potentially dangerous commands."`,
    `"Claude Code 在执行潜在危险命令前将不再请求您的批准。"`,
  )
  .replace(
    `"Claude will ask before each edit. Click, or press Shift+Tab, to switch modes."`,
    `"Claude 将在每次编辑前进行询问。点击或按 Shift+Tab 切换模式。"`,
  )
  .replace(`"Bypass permissions"`, `"绕过权限验证"`)
  .replace(
    `Not showing Claude your current file selection`,
    `不向 Claude 显示当前选中的文件`,
  )
  .replace(
    `Showing Claude your current file selection`,
    `正在向 Claude 显示当前选中的文件`,
  )
  .replace(`. Click to attach.`, `。点击以附加。`)
  .replace(`"Concocting"`, `"正在构思"`)
  .replace(`"Forging"`, `"正在生成代码"`)
  // === 新增翻译 (v1.1.7) ===
  // 导航/标题
  .replaceAll(`"Skills"`, `"技能"`)
  .replaceAll(`"Subagents"`, `"子智能体"`)
  .replaceAll(`"MCP servers"`, `"MCP 服务器"`)
  .replaceAll(`"Context usage"`, `"上下文用量"`)
  .replaceAll(`"Memory files"`, `"记忆文件"`)
  .replaceAll(`"Custom agents"`, `"自定义智能体"`)
  .replaceAll(`"Session paused"`, `"会话已暂停"`)
  .replaceAll(`"Auto mode"`, `"自动模式"`)
  .replaceAll(`"Welcome to Claude Code"`, `"欢迎使用 Claude Code"`)
  .replaceAll(`"Learn Claude Code"`, `"了解 Claude Code"`)
  .replaceAll(`"VSCode Problems"`, `"VS Code 问题"`)
  // 按钮/操作
  .replaceAll(`"Sure!"`, `"好的！"`)
  .replaceAll(`"What? No!"`, `"不要！"`)
  .replaceAll(`"Retry"`, `"重试"`)
  .replaceAll(`"Send feedback"`, `"发送反馈"`)
  .replaceAll(`"Give feedback"`, `"提交反馈"`)
  .replaceAll(`"View usage"`, `"查看用量"`)
  .replaceAll(`"Show more"`, `"展开"`)
  .replaceAll(`"Show less"`, `"收起"`)
  .replaceAll(`"Open worktree"`, `"打开工作树"`)
  .replaceAll(`"Browse the web"`, `"浏览网页"`)
  .replaceAll(`"Copy to clipboard"`, `"复制到剪贴板"`)
  .replaceAll(`"Disconnect notebook"`, `"断开笔记本"`)
  .replaceAll(`"Check connection"`, `"检查连接"`)
  .replaceAll(`"View output logs"`, `"查看输出日志"`)
  .replaceAll(`"Open in browser"`, `"在浏览器中打开"`)
  .replaceAll(`"Continue here"`, `"从此继续"`)
  .replaceAll(`"Continue in browser"`, `"在浏览器中继续"`)
  .replaceAll(`"Hide onboarding"`, `"隐藏新手引导"`)
  .replaceAll(`"Finish onboarding"`, `"完成新手引导"`)
  .replaceAll(`"Toggle fast mode"`, `"切换快速模式"`)
  .replaceAll(`"Submit"`, `"提交"`)
  .replaceAll(`"Show me"`, `"告诉我"`)
  // 反馈/评价
  .replaceAll(`"Bad"`, `"差"`)
  .replaceAll(`"Fine"`, `"一般"`)
  .replaceAll(`"Good"`, `"好"`)
  .replaceAll(`"Okay"`, `"好的"`)
  .replaceAll(`"How is Claude doing this session?"`, `"本会话中 Claude 表现如何？"`)
  .replaceAll(`"How can I do better? We would love to hear your feedback!"`, `"怎样做得更好？期待听到您的反馈！"`)
  .replace(`"Tell us more (optional)"`, `"告诉我们更多（可选）"`)
  .replaceAll(`"Thanks for the feedback!"`, `"感谢您的反馈！"`)
  .replaceAll(`"Thank you very much for the feedback!"`, `"非常感谢您的反馈！"`)
  .replaceAll(`"Can I ask for a favor?"`, `"能帮我个忙吗？"`)
  .replaceAll(`"What went wrong?"`, `"出了什么问题？"`)
  .replaceAll(`"Learn how we use your feedback"`, `"了解我们如何使用您的反馈"`)
  // 状态/消息
  .replace(`"Authenticating..."`, `"正在认证…"`)
  .replaceAll(`"Signed in"`, `"已登录"`)
  .replaceAll(`"Auto mode is enabled"`, `"自动模式已启用"`)
  .replaceAll(`"Something went wrong"`, `"出了点问题"`)
  .replaceAll(`"No sessions yet"`, `"暂无会话"`)
  .replaceAll(`"No web sessions yet"`, `"暂无网页会话"`)
  .replaceAll(`"No tools found"`, `"未找到工具"`)
  .replaceAll(`"No MCP servers configured."`, `"未配置 MCP 服务器。"`)
  .replaceAll(`"No messages to rewind to yet."`, `"暂无可以回滚的消息。"`)
  .replaceAll(`"Different repository"`, `"不同的仓库"`)
  .replaceAll(`"This session is in worktree"`, `"此会话在工作树中"`)
  .replaceAll(`"Start one at claude.ai/code"`, `"在 claude.ai/code 上开始"`)
  .replaceAll(`"Re-open authentication page"`, `"重新打开认证页面"`)
  .replaceAll(`"Failed to load usage data"`, `"加载用量数据失败"`)
  .replaceAll(`"Branch switch failed"`, `"分支切换失败"`)
  // 复刻/回滚
  .replaceAll(`"Fork conversation from here"`, `"从此处复刻对话"`)
  .replaceAll(`"Fork conversation and rewind code"`, `"复刻对话并回滚代码"`)
  .replaceAll(`"Rewind code to here"`, `"回滚代码至此"`)
  .replace(`"Select a message to restore code and fork the conversation from that point."`, `"选择一条消息以恢复代码并从该点复刻对话。"`)
  // 工作树
  .replaceAll(`"Worktree Name"`, `"工作树名称"`)
  .replaceAll(`"New worktree name"`, `"新工作树名称"`)
  .replaceAll(`"Create Worktree Session"`, `"创建工作树会话"`)
  .replace(`"A new Git worktree will be created in a sibling directory"`, `"将在同级目录中创建新的 Git 工作树"`)
  .replaceAll(`"Switch branch to "`, `"切换到 "`)
  .replaceAll(`"Continue without switching branch"`, `"不切换分支继续"`)
  // 投入等级
  .replace(`"Click to cycle effort level"`, `"点击循环切换投入等级"`)
  .replace(`"Click or drag to set effort level"`, `"点击或拖拽以设置投入等级"`)
  // 新手引导/建议
  .replaceAll(`"Prompt Claude to write code"`, `"提示 Claude 编写代码"`)
  .replaceAll(`"Highlight code and ask for edits"`, `"高亮代码并请求编辑"`)
  .replaceAll(`"Give Claude rules to remember"`, `"为 Claude 设置记忆规则"`)
  .replaceAll(`"Let Claude edit without stopping"`, `"让 Claude 不间断编辑"`)
  .replaceAll(`"Use Plan mode for complex changes"`, `"使用计划模式处理复杂更改"`)
  .replaceAll(`"Try something like:"`, `"试试类似："`)
  .replaceAll(`"e.g. my-feature"`, `"例如：my-feature"`)
  .replaceAll(`"edited a file with Claude"`, `"已通过 Claude 编辑文件"`)
  .replaceAll(`"highlighted code and prompted Claude"`, `"已高亮代码并发起提示"`)
  .replaceAll(`"created a CLAUDE.md file"`, `"已创建 CLAUDE.md 文件"`)
  .replaceAll(`"used Plan mode"`, `"已使用计划模式"`)
  .replaceAll(`"used Auto-Accept mode"`, `"已使用自动接受模式"`)
  .replaceAll(`"Just create a sample file"`, `"创建一个示例文件"`)
  .replaceAll(`"Write a test for a recent change"`, `"为最近的修改编写测试"`)
  .replaceAll(`"Update or create a helpful README"`, `"更新或创建帮助性 README"`)
  .replaceAll(`"Explore the codebase and suggest a change"`, `"探索代码库并提出修改建议"`)
  .replaceAll(`"Add browser tabs to the conversation"`, `"添加浏览器标签页到对话中"`)
  .replaceAll(`"Does this look right?"`, `"这看起来对吗？"`)
  .replaceAll(`"What does this code do?"`, `"这段代码是做什么的？"`)
  .replaceAll(`"Can you refactor this into smaller pieces?"`, `"能将其重构为更小的模块吗？"`)
  .replaceAll(`"Explore this codebase and document it in CLAUDE.md"`, `"探索此代码库并在 CLAUDE.md 中记录"`)
  .replaceAll(`"In CLAUDE.md, remember that I always prefer..."`, `"在 CLAUDE.md 中，记住我更喜欢..."`)
  .replace(`"Describe the change you want..."`, `"描述您想要的修改…"`)
  // 工具名称
  .replaceAll(`"Network Access"`, `"网络访问"`)
  .replaceAll(`"Search tools"`, `"搜索工具"`)
  .replaceAll(`"Edit Notebook Cell "`, `"编辑笔记本单元格 "`)
  // 权限/认证
  .replaceAll(`"Allow fetching this url?"`, `"允许获取此 URL？"`)
  .replaceAll(`"Allow searching for this query?"`, `"允许搜索此查询？"`)
  .replaceAll(`"Allow network connection to this host?"`, `"允许与此主机建立网络连接？"`)
  .replaceAll(`"Install and manage plugins"`, `"安装和管理插件"`)
  .replaceAll(`"Learn more about MCP"`, `"了解更多关于 MCP"`)
  .replaceAll(`"Manage usage on claude.ai"`, `"在 claude.ai 上管理用量"`)
  .replaceAll(`"Continue a previous conversation"`, `"继续之前的对话"`)
  .replaceAll(`"Restart the onboarding flow"`, `"重新开始新手引导"`)
  .replaceAll(`"Toggle fast mode for faster responses (Opus only)"`, `"切换快速模式以获得更快响应（仅限 Opus）"`)
  .replaceAll(`"Open a new conversation in a new tab"`, `"在新标签页中打开新对话"`)
  .replaceAll(`"Teleported from web"`, `"从网页传送"`)
  .replaceAll(`"Click to compact now."`, `"点击立即压缩。"`)
  .replaceAll(`"Claude may use instructions, code, or files from this skill."`, `"Claude 可能会使用此技能中的指令、代码或文件。"`)
  .replaceAll(`"Skills, subagents, plugins, and MCP servers"`, `"技能、子智能体、插件和 MCP 服务器"`)
  .replace(`"Claude will automatically choose the best permission mode for each task"`, `"Claude 将为每个任务自动选择最佳权限模式"`)
  // 长文本描述
  .replace(`"In Ask before editing mode, Claude will never change files without approval."`, `"在修改前询问模式下，Claude 未经批准绝不会修改文件。"`)
  .replace(`"Our newest model for complex, long-running work. Switch anytime with /model."`, `"我们最新的模型，适用于复杂、长期运行的任务。随时使用 /model 切换。"`)
  .replace(`"Claude will not ask for approval before running potentially dangerous commands"`, `"Claude 在执行潜在危险命令前不会请求批准"`)
  .replace(`"Fable 5 was included in your plan for a limited time, and now requires usage credits."`, `"Fable 5 曾在限时内包含在您的计划中，现在需要使用额度。"`)
  .replace(`"After making changes, exit Claude in Terminal, and reload the IDE extension to use them here."`, `"在终端中做出更改后，退出 Claude 并重新加载 IDE 扩展即可在此生效。"`)
  .replace(`"Output style is set via /config. After changing it in Terminal and reloading this extension, you'll be able to use it here."`, `"输出样式通过 /config 设置。在终端中更改并重载此扩展后，即可在此使用。"`)
  .replace(`"Claude knows which file you're viewing in VS Code, and can see what's selected. Highlight code in the editor, then prompt Claude to edit it."`, `"Claude 知道您在 VS Code 中查看的文件，并能看到选中内容。在编辑器中高亮代码，然后提示 Claude 进行编辑。"`)
  .replace(`"Press Shift-Tab twice, or click the mode picker twice, to cycle into Plan Mode. This forces Claude to write a detailed plan before it can edit any code."`, `"按两次 Shift-Tab，或点击两次模式选择器，切换到计划模式。这将强制 Claude 在编辑任何代码之前编写详细的计划。"`)
  .replace(`"By default, Claude asks you before editing a file. Press Shift-Tab or click the mode picker to switch to Auto-Accept mode. Then, send a prompt and watch Claude edit without stopping!"`, `"默认情况下，Claude 在编辑文件前会询问您。按 Shift-Tab 或点击模式选择器可切换至自动接受模式。然后发送提示，看着 Claude 不停编辑！"`)
  .replace(`"Create a CLAUDE.md file and add permanent instructions for Claude. Every time you prompt Claude, it'll receive these instructions. Include rules for how to interact, coding norms, and details about your project."`, `"创建 CLAUDE.md 文件并添加永久性指令。每次向 Claude 发出提示时，它都会收到这些指令。包括交互规则、编码规范和项目详情。"`)
  .replace(`"This session was started on a different branch. Switch to continue with the original context."`, `"此会话在另一个分支上启动。切换以使用原始上下文继续。"`)
  .replace(`"If the browser didn't open, visit this URL:"`, `"如果浏览器未打开，请访问此 URL："`)
  .replace(`"Or, paste your authorization code manually:"`, `"或者，手动粘贴授权码："`)
  .replace(`"If the redirect page shows a connection error, paste the URL from your browser's address bar:"`, `"如果重定向页面显示连接错误，请粘贴浏览器地址栏中的 URL："`)
  .replace(`"Re-launch the extension to continue."`, `"重新启动扩展以继续。"`);

// 写入回去
fs.writeFileSync(path, content, "utf8");

console.log("✅ Claude Code 扩展汉化补丁执行成功！");
