<script setup lang="ts">
const mode = useColorMode()

const changeMode = (name: string) => {
  mode.preference = name
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        size="icon"
        class="ghost"
      >
        <Icon
          v-if="mode.preference === 'dark'"
          name="lucide:moon"
          class="w-4 h-4"
        />
        <Icon
          v-else-if="mode.preference === 'light'"
          name="lucide:sun"
          class="w-4 h-4"
        />
        <Icon
          v-else
          name="lucide:monitor"
          class="w-4 h-4"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        class="flex items-center gap-2"
        @click="changeMode('light')"
      >
        <Icon
          name="lucide:sun"
          class="w-4 h-4"
        />
        Light Mode
      </DropdownMenuItem>
      <DropdownMenuItem
        class="flex items-center gap-2"
        @click="changeMode('dark')"
      >
        <Icon
          name="lucide:moon"
          class="w-4 h-4"
        />
        Dark Mode
      </DropdownMenuItem>
      <DropdownMenuItem
        class="flex items-center gap-2"
        @click="changeMode('system')"
      >
        <Icon
          name="lucide:monitor"
          class="w-4 h-4"
        />
        System Mode
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
