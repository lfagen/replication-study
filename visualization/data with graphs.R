# Loading Data

setwd("/Users/lucasfagen/Desktop/lx/psycholing/project/code")

library(dplyr)
library(ggplot2)

txtdata<- read.csv("/Users/lucasfagen/Desktop/lx/psycholing/project/code/results.txt", header=F, comment.char="#", col.names=paste0("V", 1:12), stringsAsFactors=F)

filepath <- "./results.csv"
data <- read.csv(filepath, header=F, comment.char="#", col.names=paste0("V", 1:12), stringsAsFactors=F, na.strings = "NULL")
data$V10 <- as.integer(data$V10)
names(data)[names(data)=="V2"] <- "trial"
names(data)[names(data)=="V4"] <- "sentence"

form_data <- data %>% filter(V3 == "Form")
question_data <- data %>% filter(V3 == "Question" & V6 != "practice")
reading_data <- data %>% filter(V3 == "DashedSentence" & V6 != "practice")
str(question_data)

# joining the question and reading dataframes
# each row now marked for accuracy
total <- merge(x=question_data, y=reading_data, by=c("trial", "sentence"))
names(total)[names(total)=="V10.x"] <- "accuracy"
names(total)[names(total)=="V10.y"] <- "RT"
names(total)[names(total)=="V6.x"] <- "condition"
total$accuracy <- as.factor(total$accuracy)

# new dataframe for just verb RTs
verbs <- total %>% filter(V9.y == "was" | V9.y == "were")


# Plots

## Adjective Choice Results
vplot <- ggplot(question_data, aes(x=V6, y=V10)) + 
  geom_violin()
vplot + stat_summary(fun=mean, geom="point", shape=23, size=2)

## Reading Time Results
ggplot(verbs, aes(x=condition, y=RT, fill=accuracy)) +
  geom_violin()
